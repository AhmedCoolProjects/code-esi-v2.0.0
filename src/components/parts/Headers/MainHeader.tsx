import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { Button, Grid, IconButton } from "@mui/material";
import { PATHS_DATA } from "../../../assets/data";
import { IMAGES } from "../../../constants";
import { NavigationMenu } from "../../cards";

export function MainHeader() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full mb-3 flex flex-col space-y-3 md:hidden">
      <NavigationMenu
        anchorEl={anchorEl}
        open={open}
        data={PATHS_DATA}
        handleClose={handleCloseMenu}
      />
      <Grid container spacing={0}>
        <Grid
          className="flex flex-row items-center justify-start"
          item
          xs={3}
          sm={3}
        >
          <Button size="small" onClick={() => router.push("/about")}>
            about
          </Button>
        </Grid>
        <Grid
          className="items-center flex flex-col justify-center"
          item
          xs={6}
          sm={6}
        >
          <Image
            onClick={() => router.push("/")}
            src={IMAGES.logo}
            height={80}
            width={140}
            alt="CodeEsi Logo"
            className="cursor-pointer"
            objectFit="cover"
          />
        </Grid>
        <Grid
          className="flex flex-row items-center justify-end"
          item
          xs={3}
          sm={3}
        >
          <IconButton onClick={handleClickOpenMenu}>
            <MdMoreVert />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
