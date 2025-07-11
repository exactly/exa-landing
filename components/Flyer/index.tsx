import { Box, Typography, useTheme, useMediaQuery, Link } from "@mui/material";
import Image from "next/image";

export default function Flyer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Box sx={{ height: "100dvh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ height: "50%", position: "relative", overflow: "hidden" }}>
          <Box
            sx={{
              position: "absolute",
              width: "120px",
              top: "5%",
              left: "5%",
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
          <Image
            src="/hero-phone.jpg"
            alt="hero image"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center -10%",
              transform: "scale(1.1)",
            }}
            priority
          />
        </Box>

        <Box
          sx={{
            height: "50%",
            backgroundColor: "#171918",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            padding: 3,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "clamp(20px, 8vw, 31px)",
                    md: 56,
                  },
                }}
                fontWeight={700}
                color="#12A594"
              >
                Exactly what finance
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "clamp(20px, 8vw, 31px)",
                    md: 56,
                  },
                }}
                fontWeight={200}
                color="#50D1B2"
              >
                should be today
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "clamp(14px, 4vw, 17px)",
                  md: 17,
                },
              }}
            >
              Say hi to buying now, and paying later {isMobile && <br />} while
              holding your crypto.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mt: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box>
              <Link
                href="https://apps.apple.com/app/exa-app/id6572315454"
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
            <Box display="flex" justifyContent="center">
              <Link
                href="https://web.exactly.app"
                target="_blank"
                rel="noreferrer noopener"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textDecoration: "none",
                }}
              >
                <Typography fontSize={13} color="#EEF1F0">
                  or use the{" "}
                  <Box
                    component="span"
                    sx={{
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    web version
                  </Box>
                </Typography>
                <Image
                  src="/icons/arrow-out.svg"
                  alt="x icon"
                  width={12}
                  height={12}
                  style={{
                    fill: "#EEF1F0",
                    stroke: "#EEF1F0",
                    strokeWidth: 1,
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#171918",
          display: "flex",
          padding: 8,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: { xs: "125px", md: "200px" },
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
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box>
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
              Say hi to buying now, and paying later {isMobile && <br />} while
              holding your crypto.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Box>
              <Link
                href="https://apps.apple.com/app/exa-app/id6572315454"
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
            <Box display="flex">
              <Link
                href="https://web.exactly.app"
                target="_blank"
                rel="noreferrer noopener"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textDecoration: "none",
                }}
              >
                <Typography fontSize={13} color="#EEF1F0">
                  or use the{" "}
                  <Box
                    component="span"
                    sx={{
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    web version
                  </Box>
                </Typography>
                <Image
                  src="/icons/arrow-out.svg"
                  alt="x icon"
                  width={12}
                  height={12}
                  style={{
                    fill: "#EEF1F0",
                    stroke: "#EEF1F0",
                    strokeWidth: 1,
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: 0.7, position: "relative", overflow: "hidden" }}>
        <Image
          src="/hero-phone.jpg"
          alt="hero image"
          fill
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </Box>
    </Box>
  );
}
