// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: 'TimeTable',
    path: '/dashboard/timetable',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Payment',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Setting',
    path: '/dashboard/settings',
    icon: icon('ic_cart'),
  },
  {
    title: 'Online classes',
    path: '/dashboard/online',
    icon: icon('ic_blog'),
  },

  // {
  //   title: 'Logout',
  //   path: '/',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
