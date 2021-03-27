import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useTheme,
} from '@chakra-ui/react';
import {
  PieChart, Pie, Cell, Legend,
} from 'recharts';
import { useManikoStore } from '../ManikoProvider';

const LEGEND_NAME = {
  cashAfter15th: 'Cash After 15th',
  creditAfter15th: 'Credit After 15th',
  cashAfter30th: 'Cash After 30th',
  creditAfter30th: 'Credit After 30th',
};

const generateData = (transactions) => {
  const result = {
    cashAfter15th: 0,
    creditAfter15th: 0,
    cashAfter30th: 0,
    creditAfter30th: 0,
  };

  if (transactions) {
    transactions.forEach((tran) => {
      if (tran.schedule === '15th' && tran.type === 'cash') {
        result.cashAfter15th += +tran.value;
      } else if (tran.schedule === '15th' && tran.type === 'credit') {
        result.creditAfter15th += +tran.value;
      } else if (tran.schedule === '30th' && tran.type === 'cash') {
        result.cashAfter30th += +tran.value;
      } else {
        result.creditAfter30th += +tran.value;
      }
    });
  }

  const data = Object.keys(result).map((k) => (
    { name: LEGEND_NAME[k], value: result[k] }
  )).filter((item) => item.value > 0);

  const totalData = [
    { name: 'Total Credit Transactions', value: result.creditAfter15th + result.creditAfter30th },
    { name: 'Total Cash Transactions', value: result.cashAfter15th + result.cashAfter30th },
  ];

  return { data, totalData };
};

const StatisticsModal = ({ isOpen, onClose }) => {
  const { transactions } = useManikoStore();
  const theme = useTheme();

  const RADIAN = Math.PI / 180;
  const COLORS = [theme.colors.blue['100'], theme.colors.violet['100'], theme.colors.red['100'], theme.colors.orange['100']];
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const { data, totalData } = generateData(transactions);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="25px" mb="0px">
        <ModalHeader>Transaction Statistics</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <Box d="flex" alignItems="center" justifyContent="center" mb="15px">
            <PieChart width={500} height={250}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="top" height={36} />
            </PieChart>
          </Box>
          {
            data.map((d) => (
              <Box textTransform="uppercase" fontSize="sm">
                {`${d.name}:`}
                <Box as="text" fontWeight="bold">{` PHP ${d.value}`}</Box>
              </Box>
            ))
          }
          {
            totalData.map((d) => (
              <Box textTransform="uppercase" fontSize="sm">
                {`${d.name}:`}
                <Box as="text" fontWeight="bold">{` PHP ${d.value}`}</Box>
              </Box>
            ))
          }
        </ModalBody>
        <ModalFooter>
          <Button bgColor="red.100" mr={3} onClick={onClose} color="white">Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StatisticsModal;
