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
  cash: 'Cash Expense',
  credit: 'Credit Expense',
  savings: 'Savings',
};

const generateData = (transactions) => {
  const result = {
    cash: 0,
    credit: 0,
    savings: 0,
  };

  if (transactions) {
    transactions.forEach((tran) => {
      if (tran.type === 'cash') {
        result.cash += +tran.value;
      } else if (tran.type === 'credit') {
        result.credit += +tran.value;
      } else if (tran.type === 'savings') {
        result.savings += +tran.value;
      }
    });
  }

  return Object.keys(result).map((k) => (
    { name: LEGEND_NAME[k], value: result[k] }
  )).filter((item) => item.value > 0);
};

const StatisticsModal = ({ isOpen, onClose }) => {
  const { track } = useManikoStore();
  const theme = useTheme();

  const RADIAN = Math.PI / 180;
  const COLORS = [theme.colors.red['100'], theme.colors.violet['100'], theme.colors.blue['100']];
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

  const data = generateData(track.transactions);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="25px" mb="0px">
        <ModalHeader>Transaction Statistics</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody overflowY="scroll" h="400px">
          <Box d="flex" alignItems="flex-start" justifyContent="center">
            <PieChart width={400} height={300}>
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
              <Legend verticalAlign="left" align="left" height={50} wrapperStyle={{ width: 200, whiteSpace: 'break-spaces', marginLeft: '30px' }} />
            </PieChart>
          </Box>
          {
            data.map((d) => (
              <Box textTransform="uppercase" fontSize="sm">
                {`Total ${d.name}:`}
                <Box as="text" fontWeight="bold">{` PHP ${d.value}`}</Box>
              </Box>
            ))
          }
          <Box textTransform="uppercase" fontSize="md" color="red.100" mt="15px">
            Total Budget Left:
            <Box as="text" fontWeight="bold">{` PHP ${+track.after15thSalary + +track.after30thSalary}`}</Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button bgColor="red.100" mr={3} onClick={onClose} color="white">Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StatisticsModal;
