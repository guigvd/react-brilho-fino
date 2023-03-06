import { Badge, IconButton } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'

import { setIsCartOpen } from "../state";
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)

  return (
    <nav className="w-5/6 flex justify-between items-center py-4 mx-auto sticky">
      <div>
        <h1 className="text-2xl text-purple-800">Brilho Fino</h1>
      </div>

      <div className="relative cursor-pointer">
        <Badge
            badgeContent={4}
            // invisible={cart.length === 0}
            color="secondary"
        >
          <IconButton>
            <ShoppingBagOutlined className="text-black text-xs" />
          </IconButton>
        </Badge>
      </div>
    </nav>
  );
};

export default Navbar;
