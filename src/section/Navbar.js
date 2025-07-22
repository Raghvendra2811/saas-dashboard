import React from "react";
import { useColorMode } from "../theme/themeContext";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";
import { navBarConfig } from "../data";

const Navbar = ({ handleToggleLeftBar, handleToggleRightBar }) => {
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const hoverStyle = {
    background: theme.palette.secondary.variant2,
    borderRadius: "8px",
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "Default";
  const handleActions = (type) => {
    switch (type) {
      case "theme":
        toggleColorMode();
        break;
      case "right_sibebar":
        handleToggleRightBar();
        break;

      default:
        break;
    }
  };
  return (
    <>
      <style>{`
        .input-element::placeholder {
          color: ${theme.palette.secondary.main};
          opacity: 1;
        }
      `}</style>
      <Grid
        px={3.5}
        py={2.5}
        sx={{ borderBottom: `1px solid ${theme.palette.disabled.main}` }}
        container
        justifyContent="space-between"
      >
        <Grid container gap={0.5} alignItems="center">
          <Grid
            sx={{ ":hover": hoverStyle }}
            className="cursor-pointer"
            onClick={handleToggleLeftBar}
            p={0.5}
            container
          >
            <img
              src={`assets/${mode}/Sidebar.png`}
              width="20px"
              height="20px"
            />
          </Grid>
          <Grid
            sx={{ ":hover": hoverStyle }}
            className="cursor-pointer"
            p={0.5}
            container
          >
            <img src={`assets/${mode}/Star.png`} width="20px" height="20px" />
          </Grid>
          <Typography variant="h2" color="secondary">
            Dashboards
          </Typography>
          <Typography variant="h2" color="secondary">
            /
          </Typography>
          <Typography variant="h2">{page}</Typography>
        </Grid>
        <Grid container gap={2.5} alignItems="center">
          <Grid
            sx={{
              background: theme.palette.secondary.variant2,
              borderRadius: "8px",
            }}
            px={1}
            py={0.5}
            container
            alignItems="center"
          >
            <Grid container>
              <img
                src={`assets/${mode}/Search.png`}
                width="16px"
                height="16px"
              />
            </Grid>
            <input
              className="input-element"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
              }}
              placeholder="Search"
            />
            <Typography variant="h2" color="disabled">
              ⌘ /
            </Typography>
          </Grid>
          <Grid container gap={1} alignItems="center">
            {navBarConfig.map((item, index) => (
              <Grid
                sx={{ ":hover": hoverStyle }}
                p={0.5}
                key={index}
                className="cursor-pointer"
                onClick={() => handleActions(item.type)}
                container
              >
                <img
                  src={`assets/${mode}/${item.icon}`}
                  width="20px"
                  height="20px"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
