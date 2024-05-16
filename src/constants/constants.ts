import {Cart} from '../screens/Cart';
import {Favourites} from '../screens/Favourites';
import {Products} from '../screens/Products';
import {Profile} from '../screens/Profile';
import {Icons} from '../components/Icons';
import Colors from './Colors';

export const TabArr = [
  {
    route: 'Products',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inactiveIcon: 'grid-outline',
    component: Products,
    color: Colors.primary,
    alphaClr: Colors.primaryAlpha,
  },
  {
    route: 'Favourites',
    label: 'Favourites',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'heart',
    inactiveIcon: 'heart-outline',
    component: Favourites,
    color: Colors.green,
    alphaClr: Colors.greenAlpha,
  },
  {
    route: 'Cart',
    label: 'Cart',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'cart',
    inactiveIcon: 'cart-outline',
    component: Cart,
    color: Colors.red,
    alphaClr: Colors.redAlpha,
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: Icons.FontAwesome,
    activeIcon: 'user',
    inactiveIcon: 'user-o',
    component: Profile,
    color: Colors.purple,
    alphaClr: Colors.purpleAlpha,
  },
];
