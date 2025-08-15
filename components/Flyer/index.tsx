import { Box, Typography, useTheme, useMediaQuery, Link } from "@mui/material";
import Image from "next/image";

export default function Flyer() {
  const theme = useTheme();
  const isVerySmall = useMediaQuery("(max-width:375px)");
  const isSmall = useMediaQuery("(max-width:414px)");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (!isMobile) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, #071D19 0%, #071D19 50%, #4CAB9A 100%)",
            opacity: 0.95,
          }}
        />

        <Box
          sx={{
            flex: 1,
            display: "flex",
            position: "relative",
            zIndex: 1,
            padding: 8,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "50%",
            }}
          >
            <Box sx={{ mb: 4, color: "white" }}>
              <Typography
                component="h1"
                fontFamily="Inter, sans-serif"
                sx={{
                  fontSize: { xs: 28, sm: 32, md: 48, lg: 56, xl: 64 },
                  color: "#EAF3E7",
                  lineHeight: 1.2,
                  fontWeight: 300,
                  mb: 1,
                }}
              >
                A Card.
                <br />
                A Wallet.
                <br />A DeFi Protocol.
              </Typography>
              <Typography
                fontFamily="Inter, sans-serif"
                sx={{
                  fontSize: { xs: 28, sm: 32, md: 48, lg: 56, xl: 64 },
                  fontWeight: 500,
                  color: "#87F4E1",
                  lineHeight: 1.1,
                }}
              >
                All Of It Together.
              </Typography>
            </Box>

            <Box sx={{ width: "40%", mb: 4 }}>
              <Image
                src="/exa-app.svg"
                alt="Exa App logo"
                width={200}
                height={40}
                style={{ width: "100%", height: "auto" }}
              />
            </Box>

            <Typography
              fontFamily="Inter, sans-serif"
              sx={{
                fontSize: 28,
                fontWeight: 600,
                color: "white",
                mb: 4,
              }}
            >
              Buy Now, Hold Your Crypto.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Link
                href="https://apps.apple.com/app/exa-app/id6572315454"
                target="_blank"
                rel="noreferrer noopener"
                sx={{ display: "block" }}
              >
                <Image
                  src="/hero/apple-store.svg"
                  alt="Download on App Store"
                  width={144}
                  height={48}
                  style={{ height: "auto" }}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=app.exactly"
                target="_blank"
                rel="noreferrer noopener"
                sx={{ display: "block" }}
              >
                <Image
                  src="/hero/google-store.svg"
                  alt="Get it on Google Play"
                  width={162}
                  height={48}
                  style={{ height: "auto" }}
                />
              </Link>
            </Box>

            <Box>
              <Link
                href="https://web.exactly.app"
                target="_blank"
                rel="noreferrer noopener"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textDecoration: "none",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                <Typography
                  fontFamily="Inter, sans-serif"
                  sx={{ fontSize: 13, color: "#EEF1F0" }}
                >
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
                  alt="External link"
                  width={12}
                  height={12}
                />
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "50%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "330px",
                backgroundColor: "transparent",
              }}
            >
              <Image
                src="/hero/home-screen.webp"
                alt="EXA App mockup"
                width={350}
                height={700}
                style={{
                  width: "100%",
                  height: "auto",
                  filter: "drop-shadow(0 2px 110px #32DEC3)",
                }}
                priority
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, #071D19 0%, #071D19 30%, #4CAB9A 100%)",
          opacity: 0.95,
        }}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          padding: { xs: 2, sm: 3 },
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center",
          paddingTop: { xs: 4, sm: 6 },
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            component="h1"
            fontFamily="Inter, sans-serif"
            sx={{
              fontSize: { xs: 28, sm: 36 },
              color: "#EAF3E7",
              lineHeight: 1.2,
              fontWeight: 300,
              mb: 1,
            }}
          >
            A Card. A Wallet.
            <br />A DeFi Protocol.
          </Typography>
          <Typography
            fontFamily="Inter, sans-serif"
            sx={{
              fontSize: { xs: 28, sm: 36 },
              fontWeight: 500,
              color: "#87F4E1",
              lineHeight: 1.1,
            }}
          >
            All Of It Together.
          </Typography>
        </Box>

        <Box
          sx={{
            mb: 1,
            maxWidth: isVerySmall ? "100px" : isSmall ? "160px" : "160px",
          }}
        >
          <Image
            src="/hero/home-screen.webp"
            alt="EXA App mockup"
            width={350}
            height={700}
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(0 2px 110px #32DEC3)",
            }}
            priority
          />
        </Box>

        <Box sx={{ width: "60%", maxWidth: "150px" }}>
          <Image
            src="/exa-app.svg"
            alt="Exa App logo"
            width={200}
            height={40}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Typography
          fontFamily="Inter, sans-serif"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: "white",
            mb: 2,
          }}
        >
          Buy Now, Hold Your Crypto.
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
          <Link
            href="https://apps.apple.com/app/exa-app/id6572315454"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/hero/apple-store.svg"
              alt="Download on App Store"
              width={120}
              height={40}
              style={{ height: "auto" }}
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=app.exactly"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/hero/google-store.svg"
              alt="Get it on Google Play"
              width={135}
              height={40}
              style={{ height: "auto" }}
            />
          </Link>
        </Box>

        <Link
          href="https://web.exactly.app"
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            "&:hover": { opacity: 0.8 },
          }}
        >
          <Typography
            fontFamily="Inter, sans-serif"
            sx={{ fontSize: 13, color: "#EEF1F0" }}
          >
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
            src="/icons/arrow-out-white.svg"
            alt="External link"
            width={12}
            height={12}
          />
        </Link>
      </Box>
    </Box>
  );
}
