import React from "react";
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
    <ParallaxLayer offset={0} factor={1.1}>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "100dvh",
            sm: "100vh",
          },
          minHeight: {
            xs: "100svh",
            sm: "100vh",
          },
          maxHeight: {
            xs: "100lvh",
            sm: "100vh",
          },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "0 16px", md: "0 20px" },
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: { xs: "-30%", sm: 0 },
            left: "50%",
            right: 0,
            bottom: 0,
            width: "140vw",
            transform: "translateX(-50%)",
            backgroundImage: 'url("/hero-postnet-paying.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: {
              xs: "center center",
              sm: "20% 0%",
              md: "10% 20%",
              lg: "100% 60%",
            },
            backgroundSize: {
              xs: "auto 130vh",
              sm: "150% auto",
              md: "120% auto",
              lg: "90% auto",
            },
            zIndex: -1,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: {
              xs: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 80%, rgba(255, 255, 255, 1) 90%)",
              sm: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 80%, rgba(255, 255, 255, 0.95) 95%)",
              md: "linear-gradient(79deg, rgba(0, 0, 0, 0.50) -9.9%, rgba(0, 0, 0, 0.00) 49.77%)",
            },
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: "1152px",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            ...(isMobile
              ? {
                  justifyContent: "space-between",
                  pt: "env(safe-area-inset-top, 24px)",
                  pb: "env(safe-area-inset-bottom, 16px)",
                }
              : {
                  justifyContent: "center",
                }),
          }}
        >
          {isMobile ? (
            <>
              <Box sx={{ px: 2, pt: 2 }}>
                <Image
                  src="/exa-app.svg"
                  alt="exa card"
                  width={125}
                  height={24}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  px: 2,
                  mt: "auto",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: palette.brand.primary,
                      lineHeight: 1.2,
                    }}
                  >
                    Buy now, pay later
                    <br />
                    and hold your crypto.
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        fullWidth
                        href="https://docs.google.com/forms/d/e/1FAIpQLSer9ldKEw9mFmImaBxkJzSBwIVY63-dJAObRlfF7zVnZk1KFQ/viewform"
                        target="_blank"
                        rel="noreferrer noopener"
                        sx={{
                          backgroundColor: palette.brand.default,
                          color: palette.brand.soft,
                          borderRadius: "12px",
                          height: "60px",
                          "&:hover": {
                            backgroundColor: palette.brand.default,
                          },
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
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
                    <Grid item xs={12}>
                      <Button
                        variant="outlined"
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
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
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
                    sx={{
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                      justifyContent: "center",
                      my: 2,
                    }}
                  >
                    {["visa", "apple-pay", "google-pay"].map((brand) => (
                      <Image
                        key={brand}
                        src={`hero/${brand}.svg`}
                        alt={brand}
                        width={60}
                        height={24}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            <Grid container alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <Box>
                  {" "}
                  <Image
                    src="/exa-app.svg"
                    alt="exa card"
                    width={200}
                    height={40}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: palette.brand.primary,
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    Buy now, pay later
                    <br />
                    and hold your crypto.
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.0625rem",
                      color: "white",
                      mb: 3,
                    }}
                  >
                    Use your ETH as collateral for your credit line and split
                    your payments in up to 6 fixed rate installments in USD
                  </Typography>
                </Box>

                <Grid container spacing={2} sx={{ mb: 6 }}>
                  <Grid item md={4}>
                    <Button
                      variant="contained"
                      fullWidth
                      href="https://docs.google.com/forms/d/e/1FAIpQLSer9ldKEw9mFmImaBxkJzSBwIVY63-dJAObRlfF7zVnZk1KFQ/viewform"
                      target="_blank"
                      rel="noreferrer noopener"
                      sx={{
                        backgroundColor: palette.brand.default,
                        color: palette.brand.soft,
                        borderRadius: "12px",
                        height: "60px",
                        "&:hover": {
                          backgroundColor: palette.brand.default,
                        },
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
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
                  <Grid item md={4}>
                    <Button
                      variant="outlined"
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
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
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
                  sx={{
                    display: "flex",
                    gap: 3,
                    alignItems: "center",
                  }}
                >
                  {["visa", "apple-pay", "google-pay"].map((brand) => (
                    <Image
                      key={brand}
                      src={`${brand}.svg`}
                      alt={brand}
                      width={60}
                      height={24}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
    </ParallaxLayer>
  );
};

export default Flyer;
