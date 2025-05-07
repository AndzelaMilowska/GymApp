export const ICONS_SIZE = '1.5rem'
export const weekDaysEngShort = ["M", "T", "W", "T", "F", "S", "S"];





export const exampleEventsObject = {
    2025: {
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
    },
  };

  interface Goal {
    name: string;
    startValue: number;
    endValue: number;
    currentState: number;
    startDate?: Date;
    endDate?: Date
  }

  export const exampleGoalsArray: Goal[] = [
    {
        name: "Goal Name 200",
        startValue: 0,
        endValue: 100,
        currentState: 50,
    },
    {
        name: "Name Goal 400",
        startValue: 0,
        endValue: 100,
        currentState: 30,
    },
    {
        name: "Goal Name 300",
        startValue: 0,
        endValue: 100,
        currentState: 80,
    },
    {
        name: "Goal Name 100",
        startValue: 0,
        endValue: 100,
        currentState: 75,
    }
  ]
