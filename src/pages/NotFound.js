import { Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";

const NotFoundPage = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "Default";
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <Grid px={1} py={0.5} mb={2}>
        <Typography variant="h1" color="text">
          {page}
        </Typography>
      </Grid>

      <Grid
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        backgroundColor={theme.palette.primary.variant1}
        borderRadius={1}
        height="calc(100% - 40px)"
      >
        <Grid width="fit-content" fontSize="70px">
          🔍
        </Grid>
        <Typography mb={2} variant="h1" color="text" fontSize="28px">
          {page} Page is under development
        </Typography>
        <Button mt={2} variant="contained" color="text" onClick={handleGoBack}>
          <Typography color={theme.palette.background.default}>Go Back</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default NotFoundPage;
