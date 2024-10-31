import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Flyer from "../components/Flyer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animated, useSprings, useTransition } from "@react-spring/web";
import TableComponent from "../components/TableComponent";
import { cards, steps, faqs, carrouselImages } from "../data";

const HomePage = () => {
  const parallaxRef = useRef<IParallax | null>(null);
  const { palette, breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const TOTAL_PAGES = 33.5;

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = parallaxRef.current?.container?.current;
    if (container) {
      const handleScroll = () => {
        const progress =
          container.scrollTop /
          (container.scrollHeight - container.clientHeight);
        setScrollProgress(progress);
      };

      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const [index, setIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [expanded, setExpanded] = useState<number | false>(false);

  useEffect(() => {
    let interval;
    if (!isManual) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 4);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isManual]);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 1, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(-100%,0,0)" },
    config: { duration: 500 },
  });

  return (
    <Box style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Parallax
        ref={parallaxRef}
        pages={TOTAL_PAGES}
        style={{ overflow: "auto" }}
      >
        <Flyer />

        <ParallaxLayer
          offset={1}
          factor={12.5}
          style={{
            backgroundColor: palette.brand.primary,
          }}
        />

        <ParallaxLayer
          offset={16}
          factor={10}
          style={{
            backgroundColor: palette.brand.primary,
          }}
        />

        <ParallaxLayer
          sticky={{ start: 1, end: 4 }}
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
          }}
        >
          <Grid
            container
            sx={{ height: "100%" }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={4}>
              <Box>
                <Typography fontSize={17} fontWeight={400} color="#5F6563">
                  Introducing
                </Typography>
                <Typography fontSize={34} fontWeight={700} color="#1A211E">
                  The first onchain
                </Typography>
                <Typography fontSize={34} fontWeight={700} color="#12A594">
                  debit and credit card
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} sx={{ position: "relative" }}>
              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? -300 : -100,
                  right: 0,
                  width: "100%",
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 2) return 1;
                    if (progress > 2.5) return 0;
                    return 1 - (progress - 2) / 0.5;
                  })(),
                  transform: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    const scaleProgress =
                      progress < 1
                        ? 0
                        : progress > 1.5
                        ? 1
                        : (progress - 1) / 0.5;
                    const s = 1 - scaleProgress * 0.189;
                    const y = -35 * scaleProgress;
                    return `scale(${s}) translateY(${y}px)`;
                  })(),
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              >
                <Image
                  src="/exa-card.svg"
                  alt="exa card"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </animated.div>

              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? -50 : 0,
                  right: 0,
                  width: "100%",
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 1.5) return 0;
                    if (progress > 4) return 1;
                    return (progress - 1.5) / 2.5;
                  })(),
                  transform: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 2) return "translateY(0%)";
                    if (progress > 4) return "translateY(-45%)";
                    const translateY = ((progress - 2) / 2) * -45;
                    return `translateY(${translateY}%)`;
                  })(),
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <Image
                  src="/phone-card-screen.png"
                  alt="phone card screen"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 5, end: 7 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            sx={{ height: "100%" }}
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
          >
            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 4.75) return 0;
                    if (progress > 7.9) return 0;
                    if (progress <= 5.5) {
                      return (progress - 4.75) / (5.5 - 4.75);
                    }
                    if (progress <= 7) {
                      return 1;
                    }
                    return 1 - (progress - 7) / (7.9 - 7);
                  })(),
                }}
              >
                <Box>
                  <Typography fontSize={17} fontWeight={400} color="#5F6563">
                    For everyone, everywhere
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#1A211E">
                    Available worldwide
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#12A594">
                    in 180+ countries
                  </Typography>
                </Box>
              </animated.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 4.75) return 0;
                    if (progress > 7.9) return 0;
                    if (progress <= 5.5) {
                      return (progress - 4.75) / (5.5 - 4.75);
                    }
                    if (progress <= 7) {
                      return 1;
                    }
                    return 1 - (progress - 7) / (7.9 - 7);
                  })(),
                }}
              >
                <Box>
                  <Image
                    src="/worldwide.svg"
                    alt="worldwide"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </Box>
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 8, end: 10 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            sx={{ height: "100%" }}
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
          >
            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 7.75) return 0;
                    if (progress > 10.9) return 0;
                    if (progress <= 8.5) {
                      return (progress - 7.75) / (8.5 - 7.75);
                    }
                    if (progress <= 10) {
                      return 1;
                    }
                    return 1 - (progress - 10) / (10.9 - 10);
                  })(),
                }}
              >
                <Box>
                  <Typography fontSize={17} fontWeight={400} color="#5F6563">
                    No inssurance or service fees
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#1A211E">
                    Activate your card
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#12A594">
                    free of charge
                  </Typography>
                </Box>
              </animated.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 7.75) return 0;
                    if (progress > 10.9) return 0;
                    if (progress <= 8.5) {
                      return (progress - 7.75) / (8.5 - 7.75);
                    }
                    if (progress <= 10) {
                      return 1;
                    }
                    return 1 - (progress - 10) / (10.9 - 10);
                  })(),
                }}
              >
                <Box>
                  <animated.div style={{ width: "100%" }}>
                    <Image
                      src="/fee.svg"
                      alt="fee"
                      layout="responsive"
                      width={500}
                      height={500}
                    />
                  </animated.div>
                </Box>
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 11, end: 12.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            sx={{ height: "100%" }}
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
          >
            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 10.75) return 0;
                    if (progress > 13.9) return 0;
                    if (progress <= 11.5) {
                      return (progress - 10.75) / (11.5 - 10.75);
                    }
                    if (progress <= 13) {
                      return 1;
                    }
                    return 1 - (progress - 13) / (13.9 - 13);
                  })(),
                }}
              >
                <Box>
                  <Typography fontSize={17} fontWeight={400} color="#5F6563">
                    Spend with peace of mind
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#1A211E">
                    All transactions are
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#12A594">
                    private and secure
                  </Typography>
                </Box>
              </animated.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 10.75) return 0;
                    if (progress > 13.9) return 0;
                    if (progress <= 11.5) {
                      return (progress - 10.75) / (11.5 - 10.75);
                    }
                    if (progress <= 13) {
                      return 1;
                    }
                    return 1 - (progress - 13) / (13.9 - 13);
                  })(),
                }}
              >
                <Box>
                  <animated.div style={{ width: "100%" }}>
                    <Image
                      src="/secure-transactions.svg"
                      alt="secure transactions"
                      layout="responsive"
                      width={500}
                      height={500}
                    />
                  </animated.div>
                </Box>
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 14, end: 15 }}
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            height: "80vh",
            top: "10vh",
            position: "relative",
            padding: "0 20px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              borderRadius: "32px",
              border: `1px solid ${palette.neutral.soft}`,
            }}
          >
            {transitions((style, i) => (
              <animated.div
                style={{
                  ...style,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
                key={i}
              >
                {i === 3 ? (
                  <Box
                    display="flex"
                    width={isMobile ? "100%" : "50%"}
                    right={0}
                    position="absolute"
                  >
                    <Image
                      src={carrouselImages[i].src}
                      alt={carrouselImages[i].alt}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition={isMobile ? "75% 80%" : "50% 50%"}
                      height={368}
                      width={368}
                    />
                  </Box>
                ) : (
                  <Image
                    src={carrouselImages[i].src}
                    alt={carrouselImages[i].alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={isMobile ? "75% 80%" : "50% 50%"}
                  />
                )}

                {isMobile && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: isMobile
                        ? "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 47.51%, #000 64.57%)"
                        : "none",
                      backgroundBlendMode: isMobile ? "plus-darker" : "normal",
                    }}
                  ></Box>
                )}

                <Box
                  position="absolute"
                  top={isMobile ? "20%" : 0}
                  left={0}
                  width={{ xs: "100%", md: "55%" }}
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  padding={{ xs: "20px", md: "98px" }}
                  color={i === 3 && !isMobile ? "#000" : "#fff"}
                >
                  <Box sx={{ marginBottom: "20px" }}>
                    <Image
                      src={carrouselImages[i].icon}
                      alt={`${carrouselImages[i].title} icon`}
                      width={50}
                      height={50}
                    />
                  </Box>

                  <Typography
                    fontSize={28}
                    fontWeight={700}
                    lineHeight={"34px"}
                    sx={{
                      marginBottom: "10px",
                    }}
                  >
                    {carrouselImages[i].title}
                  </Typography>

                  <Typography
                    fontSize={16}
                    lineHeight={"21px"}
                    color={
                      i === 3 && !isMobile
                        ? palette.neutral.secondary
                        : palette.neutral.soft
                    }
                  >
                    {carrouselImages[i].subtitle}
                  </Typography>
                </Box>
              </animated.div>
            ))}
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              bottom: "11%",
              margin: "0 auto",
            }}
          >
            <Grid container justifyContent="space-around" spacing={1} px={3}>
              {carrouselImages.map((image, idx) => (
                <Grid item xs={3} key={idx}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setIndex(idx);
                      setIsManual(true);
                    }}
                    fullWidth
                    sx={() => ({
                      color: index === idx ? "#1A211E" : "#5F6563",
                      textAlign: "left",
                      backgroundColor:
                        index === idx
                          ? `${palette.brand.soft}`
                          : `${palette.brand.primary}`,
                      borderRadius: "12px",
                      height: "56px",
                      justifyContent: isMobile ? "center" : "flex-start",
                      "&:hover": {
                        backgroundColor: `${palette.brand.soft}`,
                      },
                    })}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap={1}
                      p={1}
                    >
                      <Image
                        src={image.icon}
                        alt={image.alt}
                        width={isMobile ? 35 : 20}
                        height={isMobile ? 35 : 20}
                      />
                      {!isMobile && (
                        <Typography fontSize={15} fontWeight={600}>
                          {image.buttonText}
                        </Typography>
                      )}
                    </Box>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 16, end: 19 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: "-15%",
                top: "50%",
                transform: "translateY(-50%) rotate(-90deg)",
                textOrientation: "upright",
              }}
            >
              <Typography
                component="div"
                color={palette.brand.default}
                textTransform={"uppercase"}
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                <Typography component="span" mr={"16px"}>
                  03.
                </Typography>
                <Typography component="span" mr={"16px"}>
                  02.
                </Typography>
                <Typography component="span" fontWeight={600}>
                  01.installments
                </Typography>
              </Typography>
            </Box>
          )}

          <Grid
            container
            sx={{ height: "100%" }}
            padding={"0 20px"}
            alignItems="center"
          >
            <Grid item xs={12} md={4} sx={{ margin: "0 auto" }}>
              <Box
                mb={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/icons/columns.svg"
                  alt="columns icon"
                  width={40}
                  height={40}
                />
              </Box>
              <Box>
                <Typography
                  fontSize={34}
                  fontWeight={700}
                  color={palette.brand.default}
                  lineHeight={"34px"}
                  mb={4}
                >
                  Big purchase? Split it in up to 6 installments
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#5F6563">
                  Keep your valuable assets and watch your portfolio grow while
                  paying in up to 6 low interest installments in USD.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <animated.div
                style={{
                  paddingRight: 4,
                }}
              >
                <Image
                  src="/img/installments.jpg"
                  alt="installments"
                  layout="responsive"
                  style={{ borderRadius: "35px" }}
                  width={564}
                  height={432}
                />
              </animated.div>
              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? "55%" : "25%",
                  right: isMobile ? "50%" : "20%",
                  width: isMobile ? "45%" : "25%",
                  aspectRatio: "1",
                  zIndex: 2,
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    return progress / 17 > 1 ? 1 : progress / 17;
                  })(),
                  transform: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    const translateY =
                      progress / 19 > 1 ? -50 : (progress / 19) * -50;
                    return `translateY(${translateY}%)`;
                  })(),
                }}
              >
                <Image
                  src="/installments.svg"
                  alt="installments"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </animated.div>
              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? "95%" : "75%",
                  right: "5%",
                  width: isMobile ? "45%" : "20%",
                  aspectRatio: "1",
                  zIndex: 2,
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 17) return 0;
                    if (progress > 18) return 1;
                    return progress - 17;
                  })(),
                  transform: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 17) return "translateY(0%)";
                    if (progress > 19) return "translateY(-70%)";
                    const translateY = ((progress - 17) / 2) * -70;
                    return `translateY(${translateY}%)`;
                  })(),
                }}
              >
                <Image
                  src="/success-paid.svg"
                  alt="success paid"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 20, end: 22 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: "-15%",
                top: "50%",
                transform: "translateY(-50%) rotate(-90deg)",
                textOrientation: "upright",
              }}
            >
              <Typography
                component="div"
                color={palette.brand.default}
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 400,
                  fontSize: "15px",
                }}
              >
                <Typography component="span" sx={{ marginRight: "16px" }}>
                  03.
                </Typography>
                <Typography
                  component="span"
                  fontWeight={600}
                  sx={{ marginRight: "16px" }}
                >
                  02. Credit + debit
                </Typography>
                <Typography component="span">01.</Typography>
              </Typography>
            </Box>
          )}
          <Grid
            container
            padding={"0 20px"}
            sx={{ height: "100%" }}
            alignItems="center"
          >
            <Grid item xs={12} md={4} sx={{ margin: "0 auto" }}>
              <Box
                mb={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/icons/toggle-right.svg"
                  alt="toggle right icon"
                  width={40}
                  height={40}
                />
              </Box>
              <Box>
                <Typography
                  fontSize={34}
                  fontWeight={700}
                  color={palette.brand.default}
                  lineHeight={"34px"}
                  mb={4}
                >
                  All-in-one credit and debit virtual card
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#5F6563">
                  Just choose your preferred payment method before purchasing
                  and experience seamless, flesxible spending.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                height={isMobile ? "45vh" : "50vh"}
                overflow="hidden"
                style={{
                  paddingRight: 4,
                }}
              >
                <Image
                  src="/all-in-one-card.jpg"
                  alt="phone card screen"
                  layout="responsive"
                  style={{ borderRadius: "35px" }}
                  width={500}
                  height={500}
                />
              </Box>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 23, end: 25 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: "-15%",
                top: "50%",
                transform: "translateY(-50%) rotate(-90deg)",
                textOrientation: "upright",
              }}
            >
              <Typography
                component="div"
                color={palette.brand.default}
                textTransform={"uppercase"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 400,
                  fontSize: "15px",
                }}
              >
                <Typography component="span" mr={"16px"} fontWeight={600}>
                  03. Earn
                </Typography>
                <Typography component="span" mr={"16px"}>
                  02.
                </Typography>
                <Typography component="span">01.</Typography>
              </Typography>
            </Box>
          )}
          <Grid
            container
            padding={"0 20px"}
            sx={{ height: "100%" }}
            alignItems="center"
          >
            <Grid item xs={12} md={4} sx={{ margin: "0 auto" }}>
              <Box
                mb={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/icons/card.svg"
                  alt="card icon"
                  width={40}
                  height={40}
                />
              </Box>
              <Box>
                <Typography
                  fontSize={34}
                  fontWeight={700}
                  color={palette.brand.default}
                  lineHeight={"34px"}
                  mb={4}
                >
                  Virtual card to spend in-store or online
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#5F6563">
                  Add your Exa Card to your smartphone wallet and start spending
                  in minutes. It works with Apple Wallet and Google Pay
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <animated.div
                style={{
                  paddingRight: 4,
                }}
              >
                <Image
                  src="/virtual-card.jpg"
                  alt="all in one"
                  layout="responsive"
                  style={{ borderRadius: "35px" }}
                  width={500}
                  height={500}
                />
              </animated.div>

              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? "85%" : "80%",
                  right: "2%",
                  width: isMobile ? "50%" : "15%",
                  aspectRatio: "1",
                  zIndex: 2,
                  opacity: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 23) return 0;
                    if (progress > 25) return 1;
                    return (progress - 23) / 2;
                  })(),
                  transform: (() => {
                    const progress = scrollProgress * TOTAL_PAGES;
                    if (progress < 23) return "translateY(0%)";
                    if (progress > 25) return "translateY(-70%)";
                    const translateY = ((progress - 23) / 2) * -70;
                    return `translateY(${translateY}%)`;
                  })(),
                }}
              >
                <Image
                  src="/add-wallets.svg"
                  alt="add wallets"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={26}
          factor={1.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            padding={"0 20px"}
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <Typography
                  fontSize={34}
                  fontWeight={700}
                  lineHeight={"40px"}
                  mb={2}
                >
                  Get your Exa Card and start using it in 4 simple steps
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Grid container justifyContent="center" gap={2}>
                {steps.map((style, index) => (
                  <Grid item xs={12} md={2.5} key={steps[index].id}>
                    <animated.div
                      style={{
                        opacity: (() => {
                          const progress = scrollProgress * TOTAL_PAGES;
                          const startPage = 26 + index * 0.15;
                          const endPage = 26 + (index + 1) * 0.15;
                          if (progress < startPage) return 0;
                          if (progress > endPage) return 1;
                          return (progress - startPage) / (endPage - startPage);
                        })(),
                        transform: (() => {
                          const progress = scrollProgress * TOTAL_PAGES;
                          const startPage = 26 + index * 0.15;
                          const endPage = 26 + (index + 1) * 0.15;
                          if (progress < startPage) return "translateY(20px)";
                          if (progress > endPage) return "translateY(0px)";
                          const translateY =
                            20 -
                            ((progress - startPage) / (endPage - startPage)) *
                              20;
                          return `translateY(${translateY}px)`;
                        })(),

                        border: `1px solid ${palette.neutral.soft}`,
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxHeight: isMobile ? "260px" : "auto",
                      }}
                    >
                      <Image
                        src={steps[index].image}
                        alt={steps[index].title}
                        width={180}
                        height={180}
                      />

                      <Box sx={{ padding: 3 }}>
                        <Typography
                          fontSize={20}
                          fontWeight={600}
                          lineHeight={"25px"}
                          color={palette.brand.tertiary}
                        >
                          {steps[index].id}
                        </Typography>
                        <Typography
                          fontSize={22}
                          fontWeight={700}
                          lineHeight={"28px"}
                          color={palette.brand.default}
                        >
                          {steps[index].title}
                        </Typography>
                        <Typography
                          fontSize={13}
                          fontWeight={400}
                          lineHeight={"18px"}
                          color={palette.neutral.secondary}
                        >
                          {steps[index].text}
                        </Typography>
                      </Box>
                    </animated.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={27.5}
          factor={1.5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            maxWidth: "1152px",
            margin: "0 auto",
            paddingTop: "50px",
            gap: 20,
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
            gap={2}
          >
            <Grid item xs={12} md={4} padding={"0 20px"}>
              <Box display="flex" flexDirection="column">
                <Typography
                  fontSize={isMobile ? 22 : 28}
                  fontWeight={700}
                  lineHeight={"28px"}
                >
                  Start earning as soon as you add funds
                </Typography>
                <Typography fontSize={14}>
                  Deposit your assets in the Exa App and earn APR along with
                  additional rewards.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} padding={"0 20px"}>
              <Box display="flex" flexDirection="column">
                <Image
                  src="/img/earnings.jpg"
                  alt="earnings"
                  layout="responsive"
                  width={340}
                  height={308}
                  style={{ borderRadius: "24px" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
            gap={2}
          >
            <Grid
              item
              xs={12}
              md={4}
              padding={"0 10px"}
              order={{ xs: 2, md: 1 }}
            >
              <Box display="flex" flexDirection="column">
                <Image
                  src="/img/passkeys.jpg"
                  alt="passkeys"
                  layout="responsive"
                  width={340}
                  height={308}
                  style={{ borderRadius: "24px" }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              padding={"0 30px"}
              order={{ xs: 1, md: 2 }}
            >
              <Box display="flex" flexDirection="column" gap={"10px"}>
                <Typography
                  fontSize={isMobile ? 22 : 28}
                  fontWeight={700}
                  lineHeight={"28px"}
                >
                  Only you can access and control your assets
                </Typography>
                <Typography fontSize={14}>
                  No third party is able to freeze, access, or manipulate your
                  assets. They are always accessible to you, protected by a
                  device-stored passkey, providing you with a easy-to-use,
                  self-custodial wallet experience with no-hassle.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
            gap={2}
          >
            <Grid item xs={12} md={4} padding={"0 20px"}>
              <Box display="flex" flexDirection="column" gap={"10px"}>
                <Typography
                  fontSize={isMobile ? 22 : 28}
                  fontWeight={700}
                  lineHeight={"28px"}
                >
                  Seamless transition between crypto and your local currency
                </Typography>
                <Typography fontSize={14} fontWeight={400}>
                  Easily deposit and withdraw to your local currency.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} padding={"0 20px"}>
              <Box display="flex" flexDirection="column" gap={"10px"}>
                <Image
                  src="/img/swap.svg"
                  alt="swap"
                  layout="responsive"
                  width={340}
                  height={308}
                  style={{ borderRadius: "24px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 29, end: 30 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            padding={"0 20px"}
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={6} mt={2}>
              <Box textAlign="center">
                <Typography fontSize={isMobile ? 24 : 34} fontWeight={700}>
                  Exa Cards vs Alternatives
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ paddingTop: "0px !important" }}>
              <Grid container justifyContent="center" gap={1}>
                <Grid item xs={12} md={10}>
                  <Box p={2}>
                    <Grid container spacing={3}>
                      {isMobile ? (
                        <>
                          <Grid item xs={6}>
                            <TableComponent card={cards[0]} />
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            position="relative"
                            sx={{
                              paddingLeft: "0px !important",
                            }}
                          >
                            <TableComponent card={cards[currentIndex]} />
                            <Box
                              position="absolute"
                              top="15%"
                              left={0}
                              right={0}
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              px={1}
                            >
                              <IconButton
                                onClick={() =>
                                  setCurrentIndex((prevIndex) =>
                                    prevIndex > 1
                                      ? prevIndex - 1
                                      : cards.length - 1
                                  )
                                }
                              >
                                <Image
                                  src="/icons/arrow-left.svg"
                                  alt="arrow-left"
                                  width={24}
                                  height={24}
                                />
                              </IconButton>
                              <IconButton
                                onClick={() =>
                                  setCurrentIndex((prevIndex) =>
                                    prevIndex < cards.length - 1
                                      ? prevIndex + 1
                                      : 1
                                  )
                                }
                              >
                                <Image
                                  src="/icons/arrow-right.svg"
                                  alt="arrow-right"
                                  width={24}
                                  height={24}
                                />
                              </IconButton>
                            </Box>
                          </Grid>
                        </>
                      ) : (
                        cards.map((card, index) => (
                          <Grid item xs={6} md={3} key={index}>
                            <TableComponent card={card} />
                          </Grid>
                        ))
                      )}
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 31, end: 31.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            padding={"0 20px"}
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography
                  fontSize={28}
                  fontWeight={700}
                  lineHeight={"34px"}
                  color={palette.brand.default}
                  mb={2}
                >
                  Frequently asked questions
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={(event, isExpanded) => {
                    setExpanded(isExpanded ? index : false);
                  }}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Image
                        src="/icons/chevron.svg"
                        alt="Expand icon"
                        width={20}
                        height={20}
                      />
                    }
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography
                      fontSize={17}
                      fontWeight={600}
                      lineHeight={"23px"}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      fontSize={15}
                      lineHeight={"21px"}
                      color={palette.neutral.secondary}
                      sx={{ whiteSpace: "pre-line" }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={32.5}
          factor={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <Grid
            container
            spacing={4}
            border={"1px solid #CCF3EA"}
            height={isMobile ? "750px" : "450px"}
            ml={0}
            sx={{
              backgroundColor: "#F3FBF9",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <Grid item xs={12} md={6} padding="20px">
              <Box sx={isMobile ? { textAlign: "center" } : {}}>
                <Typography
                  fontSize={{ xs: 32, md: 48 }}
                  fontWeight={700}
                  sx={() => ({
                    color: palette.brand.default,
                  })}
                >
                  Buy now, pay later
                </Typography>
                <Typography
                  fontSize={{ xs: 32, md: 48 }}
                  fontWeight={700}
                  sx={() => ({
                    color: palette.brand.default,
                  })}
                  mb={isMobile ? 2 : 6}
                >
                  and hold your crypto.
                </Typography>
              </Box>
              <Grid
                container
                spacing={2}
                my={isMobile ? 2 : 9}
                alignItems="center"
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
                        alt="waitlist icon"
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
                    href="https://twitter.com/Exa_App"
                    target="_blank"
                    rel="noreferrer noopener"
                    fullWidth
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
                display="flex"
                gap={3}
                sx={isMobile ? { justifyContent: "center" } : {}}
              >
                <Image
                  src="/footer/visa.svg"
                  alt="visa logo"
                  width={60}
                  height={24}
                />
                <Image
                  src="/footer/apple-pay.svg"
                  alt="apple pay"
                  width={60}
                  height={24}
                />
                <Image
                  src="/footer/google-pay.svg"
                  alt="google pay"
                  width={60}
                  height={24}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ margin: "0 auto" }}>
              <Box>
                <Image
                  src="/phone-hand.png"
                  alt="phone hand"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            mt="auto"
            mb={4}
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={12} md={4} gap={1}>
              <Box>
                <Image
                  src="/footer/exa-app.svg"
                  alt="exa app logo"
                  width={168}
                  height={32}
                />
              </Box>
              <Box>
                <Link
                  href="https://exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Typography
                    component="span"
                    fontSize={12}
                    color={palette.neutral.secondary}
                  >
                    Powered by Exactly Protocol
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: { xs: "start", md: "end" },
                textAlign: "center",
              }}
              gap={1}
            >
              <Box>
                <Link href={"/t&c"}>
                  <Typography
                    component="span"
                    fontSize={12}
                    color={palette.neutral.secondary}
                  >
                    Terms & Conditions
                  </Typography>
                </Link>
              </Box>
              <Box>
                <Typography fontSize={12} color={palette.neutral.secondary}>
                  Privacy Policy
                </Typography>
              </Box>
              <Box>
                <Link
                  href="https://docs.exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Typography
                    component="span"
                    fontSize={12}
                    color={palette.neutral.secondary}
                  >
                    Documentation
                  </Typography>
                </Link>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: { xs: "start", md: "end" },
                textAlign: "center",
              }}
              gap={1}
            >
              {/* <Box
                display="flex"
                gap={3}
                sx={isMobile && { justifyContent: "center" }}
              >
                <Link
                  href="https://docs.exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/footer/x-logo.svg"
                    alt="x logo"
                    width={60}
                    height={24}
                  />
                </Link>
                <Link
                  href="https://docs.exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/footer/discord.svg"
                    alt="discord logo"
                    width={60}
                    height={24}
                  />
                </Link>
                <Link
                  href="https://docs.exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/footer/telegram.svg"
                    alt="telegram logo"
                    width={60}
                    height={24}
                  />
                </Link>
              </Box> */}
              <Box>
                <Typography fontSize={12} color={palette.neutral.secondary}>
                  {`  © ${new Date().getFullYear()} Exa Labs SAS. All rights reserved.`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default HomePage;
