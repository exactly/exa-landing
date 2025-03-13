import React from "react";
import {
  Box,
  Grid,
  Link,
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
              xs: "auto 120vh",
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 4,
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: palette.brand.primary,
                      lineHeight: 1.2,
                      px: "3px",
                    }}
                  >
                    Onchain banking,
                    <br />
                    today.
                  </Typography>

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "17px",
                        px: "3px",
                        marginBottom: "10px",
                      }}
                    >
                      Download the Exa App now!
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: 2,
                        flexWrap: "wrap",
                      }}
                    >
                      <Link
                        href="https://apps.apple.com/ar/app/exa-app/id6572315454"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image
                          src="/hero/apple-store.svg"
                          alt="apple store logo"
                          width="144"
                          height="48"
                        />
                      </Link>

                      <Link
                        href="https://play.google.com/store/apps/details?id=app.exactly"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Image
                          src="/hero/google-store.svg"
                          alt="google store logo"
                          width="162"
                          height="48"
                        />
                      </Link>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    {["visa", "apple-pay", "google-pay"].map((brand) => (
                      <Image
                        key={brand}
                        src={`hero/${brand}.svg`}
                        alt={brand}
                        width={30}
                        height={12}
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
                    width="100%"
                    sx={{
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: palette.brand.primary,
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    Onchain banking,
                    <br />
                    today.
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.0625rem",
                      color: "white",
                      width: "80%",
                      mb: 3,
                    }}
                  >
                    Unlock the power of your onchain assets: Earn, spend, borrow
                    - all with the Exa App, powered by Exactly Protocol.
                  </Typography>
                </Box>

                <Grid container sx={{ mb: 15 }}>
                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "17px",
                        px: "3px",
                        marginBottom: "5px",
                      }}
                    >
                      Download the Exa App now!
                    </Typography>
                  </Grid>
                  <Grid item md={3.5}>
                    <Link
                      href="https://apps.apple.com/ar/app/exa-app/id6572315454"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="/hero/apple-store.svg"
                        alt="apple store logo"
                        width="144"
                        height="48"
                      />
                    </Link>
                  </Grid>
                  <Grid item md={4}>
                    <Link
                      href="https://play.google.com/store/apps/details?id=app.exactly"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Image
                        src="/hero/google-store.svg"
                        alt="google store logo"
                        width="162"
                        height="48"
                      />
                    </Link>
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
