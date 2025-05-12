export const ICONS_SIZE = '1.5rem'
export const WEEK_DAYS_ENG_SHORT = ["M", "T", "W", "T", "F", "S", "S"];
export const MONTHS_ENG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']




export const exampleEventsObject = {
    2025: {
      3: {
        31: {
          done: true,
          type: "leg",
        },
        10: {
          done: false,
          type: "leg",
        },
        4: {
          done: true,
          type: "leg",
        },
      },
      5: {
        1: {
          done: true,
          type: "leg",
        },
        2: {
          done: false,
          type: "leg",
        },
        4: {
          done: true,
          type: "leg",
        },
      },
      7: {
        5: {
          done: true,
          type: "leg",
        },
        11: {
          done: false,
          type: "leg",
        },
        21: {
          done: true,
          type: "leg",
        },
      },
    },
    2026: {
      3: {
        31: {
          done: true,
          type: "leg",
        },
        10: {
          done: false,
          type: "leg",
        },
        4: {
          done: true,
          type: "leg",
        },
      },
      5: {
        1: {
          done: true,
          type: "leg",
        },
        2: {
          done: false,
          type: "leg",
        },
        4: {
          done: true,
          type: "leg",
        },
      },
      7: {
        5: {
          done: true,
          type: "leg",
        },
        11: {
          done: false,
          type: "leg",
        },
        21: {
          done: true,
          type: "leg",
        },
      },
    },
    2024: {
      3: {
        31: {
          done: true,
          type: "leg",
        },
        10: {
          done: false,
          type: "leg",
        },
        4: {
          done: true,
          type: "leg",
        },
      },
      5: {
        1: {
          done: true,
          type: "leg",
        },
        2: {
          done: false,
          type: "leg",
        },
        4: {
          done: true,
          type: "leg",
        },
      },
      7: {
        5: {
          done: true,
          type: "leg",
        },
        11: {
          done: false,
          type: "leg",
        },
        21: {
          done: true,
          type: "leg",
        },
      },
    },
  };

  interface Goal {
    name: string;
    startValue: number;
    endValue: number;
    currentState: number;
    startDate: Date;
    lastUpdate: Date;
    endDate?: Date
    
  }

  export const exampleGoalsArray: Goal[] = [
    {
        name: "Goal Name 200",
        startValue: 0,
        endValue: 100,
        currentState: 50,
        startDate: new Date(2024, 10, 5),
        lastUpdate: new Date(2024, 10, 7)
    },
    {
        name: "Name Goal 400 004 laoG emaN Name Goal 400 004 laoG emaN Name Goal 400 004 laoG emaN",
        startValue: 0,
        endValue: 100,
        currentState: 30,
        startDate: new Date(2024, 10, 5),
        lastUpdate: new Date(2024, 10, 7),
        endDate: new Date(2024, 12, 5),


    },
    {
        name: "Goal Name 300",
        startValue: 0,
        endValue: 100,
        currentState: 80,
        startDate: new Date(2024, 10, 5),
        lastUpdate: new Date(2024, 10, 7)
    },
    {
        name: "Goal Name 100",
        startValue: 0,
        endValue: 100,
        currentState: 75,
        startDate: new Date(2024, 10, 5),
        lastUpdate: new Date(2024, 10, 7)
    }
  ]
