import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { THEME } from "../../constants";
import { NavigationMenuProps } from "../../types";

export function NavigationMenu(props: NavigationMenuProps) {
  const { anchorEl, open, handleClose, data } = props;
  const router = useRouter();
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {data.map((dataItem) => (
        <MenuItem
          className="px-3"
          onClick={() => router.push(dataItem.path)}
          key={dataItem.id}
          style={{
            color:
              router.pathname === dataItem.path ? THEME.primary.main : "gray",
          }}
        >
          <ListItemIcon>
            <dataItem.icon
              style={{
                color:
                  router.pathname === dataItem.path
                    ? THEME.primary.main
                    : "gray",
              }}
              size={22}
              className="mx-2"
            />
          </ListItemIcon>
          <h1 className="mx-3 text-base">{dataItem.title}</h1>
        </MenuItem>
      ))}
    </Menu>
  );
}
