import { Grid, Typography, Collapse } from "@mui/material";
import { useColorMode } from "../theme/themeContext";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";

const NavItemComp = ({ navItem }) => {
  const theme = useTheme();
  const [showChild, setShowChild] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "Default";

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
        className="nav-item cursor-pointer"
        sx={{
          ":hover": hoverStyle,
          ...(page === navItem.value && hoverStyle),
        }}
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
              style={{
                transform: showChild ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out'
              }}
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

      <Collapse in={showChild} timeout={300}>
        <Grid sx={{ paddingLeft: 2 }}>
          {navItem?.children &&
            navItem?.children.map((childNavItem) => (
              <NavItemComp navItem={childNavItem} key={childNavItem.id} />
            ))}
        </Grid>
      </Collapse>
    </>
  );
};

export default NavItemComp;