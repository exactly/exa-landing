import React from "react";
import { Box, Typography, Link, useMediaQuery, useTheme } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

const Flyer = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));

  return (
    <ParallaxLayer offset={0} factor={1.1}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#171918",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            height: { xs: "auto", md: "100vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, md: 2 },
            minWidth: { md: "40%" },
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 16,
              transform: "translateX(-90%)",
              width: "120px",
              display: { xs: "block", md: "none" },
              zIndex: 10,
            }}
          >
            <Image
              src="/exa-app.svg"
              alt="Exa App logo"
              width={120}
              height={24}
              style={{
                width: "100%",
                height: "auto",
                filter: "invert(0%) brightness(0%)",
              }}
            />
          </Box>

          {
            <Image
              src="/hero-phone.jpg"
              alt="Exa App Phone"
              width={1152}
              height={1152}
              style={{
                height: isMobile ? "auto" : "100vh",
                width: isMobile ? "100%" : "auto",
                maxHeight: isMobile ? "50vh" : "none",
                objectFit: "cover",
                maxWidth: "100%",
              }}
            />
          }
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            height: "100%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            order: { xs: 2, md: 1 },
            pt: { xs: 3, md: 6 },
            px: { xs: 3, md: 10 },
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                width: { xs: "125px", md: "200px" },
                alignSelf: { xs: "center", md: "flex-start" },
              }}
            >
              <Image
                src="/exa-app.svg"
                alt="Exa App logo"
                width={200}
                height={40}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          )}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "flex-start", md: "center" },
              alignItems: { xs: "center", md: "flex-start" },
              gap: isMobile ? 1 : 2,
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems={isMobile ? "center" : "flex-start"}
              justifyContent="center"
              textAlign={isMobile ? "center" : "left"}
              gap={1}
            >
              <Box display="flex" flexDirection="column">
                <Typography
                  fontSize={isMobile ? 31 : 56}
                  fontWeight={700}
                  color="#12A594"
                >
                  Exactly what finance
                </Typography>
                <Typography
                  fontSize={isMobile ? 31 : 56}
                  fontWeight={200}
                  color="#50D1B2"
                >
                  should be today
                </Typography>
              </Box>
              <Typography fontSize={17}>
                Say hi to buying now, and paying later {isMobile && <br />}{" "}
                while holding your crypto.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Link
                href="https://apps.apple.com/ar/app/exa-app/id6572315454"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/hero/apple-store.svg"
                  alt="Apple Store"
                  width={144}
                  height={48}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=app.exactly"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/hero/google-store.svg"
                  alt="Google Store"
                  width={162}
                  height={48}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </ParallaxLayer>
  );
};

export default Flyer;
