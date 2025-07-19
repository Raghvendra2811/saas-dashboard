import { Grid, Typography } from "@mui/material";
import { useColorMode } from "../theme/themeContext";
import { useState } from "react";
import "../section/Leftbar.css";
import { useTheme } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";

const NavItemComp = ({ navItem }) => {
  const theme = useTheme();
  const [showChild, setShowChild] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  const { mode } = useColorMode();
  const handleShowChild = () => {
    if (navItem?.children && navItem?.children.length > 0) {
      setShowChild((prev) => !prev);
    } else {
      setSearchParams({ page: navItem.value });
    }
  };
  const hoverStyle = { background: theme.palette.secondary.variant2 };
  return (
    <>
      <Grid
        onClick={handleShowChild}
        className={`${"nav-item"}`}
        sx={{ ":hover": hoverStyle, ...(page === navItem.value && hoverStyle) }}
        container
        px={1}
        py={0.5}
        gap={0.5}
      >
        <Grid className="arrow-span">
          {navItem?.children && navItem?.children.length > 0 && (
            <img
              src={`assets/${mode}/ArrowLineRight.svg`}
              height={"100%"}
              width={"100%"}
              alt="Arrow"
            />
          )}
        </Grid>
        <Grid className="icon-span">
          {navItem?.icon && (
            <img
              src={`assets/${mode}/${navItem.icon}`}
              height={"100%"}
              width={"100%"}
              alt="Chart"
            />
          )}
        </Grid>
        <Typography variant="h2">{navItem.name}</Typography>
        {page === navItem.value && (
          <span
            style={{ backgroundColor: theme.palette.secondary.variant1 }}
            className="active-indicator"
          ></span>
        )}
      </Grid>
      {showChild &&
        navItem?.children &&
        navItem?.children.map((navItem) => (
          <NavItemComp navItem={navItem} key={navItem.id} />
        ))}
    </>
  );
};

export default NavItemComp;
