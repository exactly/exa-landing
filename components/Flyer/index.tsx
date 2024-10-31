import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

const Flyer = () => {
  const { palette, breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));

  return (
    <ParallaxLayer offset={0}>
      <Box
        padding={"0 20px"}
        position="relative"
        sx={{
          backgroundImage: 'url("/hero-postnet-paying.png")',
          backgroundPosition: "10% 70%",
          backgroundSize: "130%",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(79deg, rgba(0, 0, 0, 0.50) -9.9%, rgba(0, 0, 0, 0.00) 49.77%)",
            zIndex: 1,
          },
          [breakpoints.down("sm")]: {
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50.42%, #FFF 79.08%), url("/hero-postnet-paying.png")`,
            backgroundPosition: "54% 390%",
            backgroundSize: "350%",
            "&::before": {
              background: "none",
            },
          },
        }}
      >
        <Box
          alignContent="center"
          zIndex={1}
          width="100%"
          height="90%"
          maxWidth="1152px"
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={6} display="flex" flexDirection="column">
              <Box
                px={isMobile ? 4 : 0}
                sx={{
                  mb: isMobile ? 55 : 9,
                }}
              >
                <Image
                  src="/exa-app.svg"
                  alt="exa card"
                  width={isMobile ? 125 : 200}
                  height={isMobile ? 24 : 40}
                />
              </Box>
              <Box px={isMobile ? 4 : 0}>
                <Typography
                  variant="h2"
                  fontSize={{ xs: 32, md: 48 }}
                  fontWeight={700}
                  sx={() => ({
                    color: isMobile ? "#000" : palette.brand.primary,
                  })}
                >
                  Buy now, pay later
                </Typography>
                <Typography
                  variant="h2"
                  fontSize={{ xs: 32, md: 48 }}
                  fontWeight={700}
                  sx={() => ({
                    color: isMobile ? "#000" : palette.brand.primary,
                  })}
                  mb={4}
                >
                  and hold your crypto.
                </Typography>
                {!isMobile && (
                  <Typography
                    variant="body1"
                    fontSize={{ xs: 16, md: 17 }}
                    fontWeight={400}
                    color="white"
                    mb={4}
                  >
                    Use your ETH as collateral for your credit line and split
                    your payments in up to 6 fixed rate installments in USD
                  </Typography>
                )}
              </Box>
              <Grid
                container
                spacing={2}
                alignItems="center"
                mt={isMobile ? 0 : 3}
                mb={isMobile ? 2 : 8}
                px={isMobile ? 7 : 0}
              >
                <Grid item xs={12} md={4}>
                  <Button
                    variant="contained"
                    fullWidth
                    href="https://docs.google.com/forms/d/e/1FAIpQLSer9ldKEw9mFmImaBxkJzSBwIVY63-dJAObRlfF7zVnZk1KFQ/viewform?usp=sf_link"
                    target="_blank"
                    rel="noreferrer noopener"
                    sx={() => ({
                      backgroundColor: palette.brand.default,
                      color: palette.brand.soft,
                      borderRadius: "12px",
                      height: "60px",
                      "&:hover": {
                        backgroundColor: palette.brand.default,
                      },
                    })}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography fontSize={15} fontWeight={600}>
                        Join waitlist
                      </Typography>
                      <Image
                        src="/icons/waitlist.svg"
                        alt="notebook pen icon"
                        width={20}
                        height={20}
                      />
                    </Box>
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    href="https://twitter.com/Exa_App"
                    target="_blank"
                    rel="noreferrer noopener"
                    sx={(theme) => ({
                      backgroundColor: theme.palette.brand.soft,
                      color: theme.palette.brand.default,
                      borderRadius: "12px",
                      height: "60px",
                      "&:hover": {
                        backgroundColor: theme.palette.brand.soft,
                      },
                    })}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography fontSize={15} fontWeight={600}>
                        Follow us
                      </Typography>
                      <Image
                        src="/icons/x.svg"
                        alt="x icon"
                        width={20}
                        height={20}
                      />
                    </Box>
                  </Button>
                </Grid>
              </Grid>
              <Box
                px={isMobile ? 4 : 0}
                alignItems="center"
                alignContent="center"
                justifyContent={isMobile ? "center" : "flex-start"}
                sx={{
                  display: "flex",
                  gap: 3,
                }}
              >
                <Image
                  src={isMobile ? "hero/visa.svg" : "visa.svg"}
                  alt="exa card"
                  width={60}
                  height={24}
                />
                <Image
                  src={isMobile ? "hero/apple-pay.svg" : "apple-pay.svg"}
                  alt="apple pay"
                  width={60}
                  height={24}
                />
                <Image
                  src={isMobile ? "hero/google-pay.svg" : "google-pay.svg"}
                  alt="google pay"
                  width={60}
                  height={24}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ParallaxLayer>
  );
};

export default Flyer;
