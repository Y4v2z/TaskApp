// import {
//   ChartCircle,
//   Clock,
//   TaskSquare,
//   CloseCircle,
// } from 'iconsax-react-native';
// import AppColors from '../theme/appColors';

// const status = {
//   ONGOİNG: 1,
//   PENDİNG: 2,
//   COMPLETED: 3,
//   CANCEL: 4,
// };
// const taskValues = [
//   {
//     title: 'Ongoing',
//     color: AppColors.ONGOİNG,
//     icon: <ChartCircle size="32" color="#d9e3f0" />,
//   },
//   {
//     title: 'Pending',
//     color: AppColors.PENDİNG,
//     icon: <Clock size="32" color="#d9e3f0" />,
//   },
//   {
//     title: 'Completed',
//     color: AppColors.COMPLETED,
//     icon: <TaskSquare size="32" color="#d9e3f0" />,
//   },
//   {
//     title: 'Cancel',
//     color: AppColors.CANCEL,
//     icon: <CloseCircle size="32" color="#d9e3f0" />,
//   },
// ];

// export {status, taskValues};

import {
  ChartCircle,
  Clock,
  TickCircle,
  CloseCircle,
} from 'iconsax-react-native';
import AppColors from '../theme/appColors';

const status = {
  ONGOING: 1,
  PENDING: 2,
  COMPLATED: 3,
  CANCEL: 4,
};

const taskVlues = [
  {
    status: 1,
    title: 'Ongoing',
    color: AppColors.ONGOING,
    icon: <ChartCircle size="20" color={AppColors.WHITE} />,
  },
  {
    status: 2,
    title: 'Pending',
    color: AppColors.PENDING,
    icon: <Clock size="20" color={AppColors.WHITE} />,
  },
  {
    status: 3,
    title: 'Complated',
    color: AppColors.COMPLATED,
    icon: <TickCircle size="20" color={AppColors.WHITE} />,
  },
  {
    status: 4,
    title: 'Cancel',
    color: AppColors.CANCEL,
    icon: <CloseCircle size="20" color={AppColors.WHITE} />,
  },
];

export {status, taskVlues};
