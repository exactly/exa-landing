import { useMediaQuery, useTheme } from "@mui/material";

export const useParallaxConfig = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    pages: {
      total: isMobile ? 29 : 27,
    },
    sections: {
      sharedBackground: {
        offset: 1,
        factor: isMobile ? 10 : 8,
      },

      hero: {
        offset: 0,
        factor: 1.1,
      },

      intro: {
        sticky: {
          start: 1,
          end: isMobile ? 3.5 : 4,
        },
        animations: {
          card: {
            mobile: {
              initialY: 0,
              finalY: 0,
              startFade: 1,
              endFade: 3,
              startTransform: 1,
              endTransform: 3,
            },
            desktop: {
              initialY: 0,
              finalY: -35,
              startFade: 1,
              endFade: 2.5,
              startTransform: 1,
              endTransform: 2.5,
            },
          },
          phone: {
            mobile: {
              initialY: 100,
              finalY: -250,
              startFade: 1.5,
              endFade: 4.8,
              startTransform: 1.5,
              endTransform: 4,
            },
            desktop: {
              initialY: 0,
              finalY: -300,
              startFade: 1.5,
              endFade: 5.5,
              startTransform: 2,
              endTransform: 4,
            },
          },
        },
      },

      worldwide: {
        sticky: {
          start: isMobile ? 4.5 : 5,
          end: isMobile ? 6 : 6.5,
        },
        animations: {
          text: {
            mobile: {
              initialY: 100,
              finalY: 0,
              startFade: 4.5,
              endFade: 7.2,
            },
            desktop: {
              initialY: 100,
              finalY: -200,
              startFade: 4.5,
              endFade: 7,
            },
          },
          image: {
            mobile: {
              initialY: 150,
              finalY: -40,
              startFade: 4.5,
              endFade: 7.2,
              startTransform: 4.2,
              endTransform: 7,
            },
            desktop: {
              initialY: 100,
              finalY: -200,
              startFade: 4.5,
              endFade: 7,
              startTransform: 4.5,
              endTransform: 7,
            },
          },
        },
      },

      freeCard: {
        sticky: {
          start: isMobile ? 6.5 : 6.5,
          end: isMobile ? 8 : 8,
        },
        animations: {
          text: {
            mobile: {
              initialY: 100,
              finalY: 0,
              startFade: 6.5,
              endFade: 9.2,
            },
            desktop: {
              initialY: 100,
              finalY: -200,
              startFade: 5.5,
              endFade: 8.5,
            },
          },
          image: {
            mobile: {
              initialY: 150,
              finalY: -40,
              startFade: 6.5,
              endFade: 9.2,
              startTransform: 6.2,
              endTransform: 9,
            },
            desktop: {
              initialY: 100,
              finalY: -200,
              startFade: 5.5,
              endFade: 8.5,
              startTransform: 5.5,
              endTransform: 8.5,
            },
          },
        },
      },

      secure: {
        sticky: {
          start: isMobile ? 8.5 : 8,
          end: isMobile ? 10 : 9.5,
        },
        animations: {
          text: {
            mobile: {
              initialY: 100,
              finalY: 0,
              startFade: 8.5,
              endFade: 11.2,
            },
            desktop: {
              initialY: 100,
              finalY: -200,
              startFade: 7,
              endFade: 10,
            },
          },
          image: {
            mobile: {
              initialY: 150,
              finalY: -40,
              startFade: 8.5,
              endFade: 11.2,
              startTransform: 8.2,
              endTransform: 11,
            },
            desktop: {
              initialY: 100,
              finalY: -200,
              startFade: 7,
              endFade: 10,
              startTransform: 7,
              endTransform: 10,
            },
          },
        },
      },

      carousel: {
        offset: {
          start: isMobile ? 11 : 10.5,
        },
        layout: {
          mobile: {
            height: "80vh",
            top: "10vh",
            imagePosition: "75% 80%",
            contentTop: "20%",
            contentWidth: "100%",
            contentPadding: "20px",
            buttonSize: 35,
            gradientBg:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 47.51%, #000 64.57%)",
          },
          desktop: {
            height: "80vh",
            top: "10vh",
            imagePosition: "50% 50%",
            contentTop: 0,
            contentWidth: "55%",
            contentPadding: "98px",
            buttonSize: 20,
            gradientBg: "none",
          },
        },
      },

      bigPurchase: {
        sticky: {
          start: isMobile ? 13 : 12.5,
          end: isMobile ? 14 : 13.5,
        },
        layout: {
          mobile: {
            padding: "0 20px",
            imageWidth: "50%",
            imagePosition: { top: "85%", right: "2%" },
            primaryImage: {
              width: "45%",
              position: { top: "55%", right: "50%" },
            },
            secondaryImage: {
              width: "45%",
              position: { top: "95%", right: "5%" },
            },
          },
          desktop: {
            padding: "0 20px",
            imageWidth: "15%",
            imagePosition: { top: "80%", right: "2%" },
            primaryImage: {
              width: "25%",
              position: { top: "25%", right: "20%" },
            },
            secondaryImage: {
              width: "20%",
              position: { top: "75%", right: "5%" },
            },
          },
          sideLabel: {
            left: "-15%",
            fontSize: "15px",
          },
        },
        animations: {
          floatingElement: {
            mobile: {
              startFade: 14,
              endFade: 16,
              startTransform: 13,
              endTransform: 15.5,
              translateY: -70,
            },
            desktop: {
              startFade: 13,
              endFade: 15,
              startTransform: 11.5,
              endTransform: 12.5,
              translateY: -70,
            },
          },
        },
      },

      allInOne: {
        sticky: {
          start: isMobile ? 15 : 14.5,
          end: isMobile ? 17 : 16.5,
        },
        layout: {
          mobile: {
            padding: "0 20px",
            height: "45vh",
          },
          desktop: {
            padding: "0 20px",
            height: "50vh",
          },
          sideLabel: {
            left: "-15%",
            fontSize: "15px",
          },
        },
      },

      virtualCard: {
        sticky: {
          start: isMobile ? 18 : 17.5,
          end: isMobile ? 19 : 19.5,
        },
        layout: {
          mobile: {
            padding: "0 20px",
            height: "45vh",
          },
          desktop: {
            padding: "0 20px",
            height: "50vh",
          },
          sideLabel: {
            left: "-15%",
            fontSize: "15px",
          },
        },
      },

      steps: {
        offset: {
          start: isMobile ? 20.5 : 20.5,
          factor: isMobile ? 1.3 : 1,
        },
        layout: {
          mobile: {
            padding: "0 20px",
            titleSize: "24px",
            cardMaxHeight: "260px",
            gridSpacing: 2,
            marginTop: 0,
          },
          desktop: {
            padding: "0 20px",
            titleSize: "34px",
            gridSpacing: 2,
          },
        },
      },

      earnings: {
        offset: {
          start: isMobile ? 22 : 21.5,
          factor: isMobile ? 1.3 : 1.5,
        },
        layout: {
          mobile: {
            padding: "0 20px",
            spacing: 2,
            imageHeight: "308px",
            titleSize: "22px",
            subtitleSize: "14px",
          },
          desktop: {
            padding: "0 20px",
            spacing: 2,
            imageHeight: "308px",
            titleSize: "28px",
            subtitleSize: "14px",
          },
        },
      },
    },
    calculateOpacity: (progress: number, start: number, end: number) => {
      if (progress < start) return 0;
      if (progress > end) return 0;

      const fadeInDuration = 0.5;
      const fadeOutDuration = 0.5;

      if (progress <= start + fadeInDuration) {
        return (progress - start) / fadeInDuration;
      }
      if (progress <= end - fadeOutDuration) {
        return 1;
      }
      return 1 - (progress - (end - fadeOutDuration)) / fadeOutDuration;
    },

    calculateTransform: (
      progress: number,
      start: number,
      end: number,
      { initialScale = 1, finalScale = 1, initialY = 0, finalY = 0 }
    ) => {
      if (progress < start)
        return `scale(${initialScale}) translateY(${initialY}px)`;
      if (progress > end) return `scale(${finalScale}) translateY(${finalY}px)`;

      const progressPercent = (progress - start) / (end - start);
      const easedProgress =
        progressPercent < 0.5
          ? 4 * progressPercent * progressPercent * progressPercent
          : 1 - Math.pow(-2 * progressPercent + 2, 3) / 2;

      const scale = initialScale + (finalScale - initialScale) * easedProgress;
      const translateY = initialY + (finalY - initialY) * easedProgress;

      return `scale(${scale}) translateY(${translateY}px)`;
    },
  };
};
