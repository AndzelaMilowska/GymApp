export const ICONS_SIZE = "1.5rem";
export const WEEK_DAYS_ENG_SHORT = ["M", "T", "W", "T", "F", "S", "S"];
export const MONTHS_ENG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dateOptions: any = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

export const dateOptionsLong: any = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

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
  // startValue: number;
  goalValue: number;
  // currentState: number;
  // startDate: Date;
  // lastUpdate: Date;
  endDate?: Date;
  description?: string;
  valueFormat?: string;
  events: GoalEvent[];
  //     planned expiration date -> separated
  // goalEvents: [date:]
  //   array of events
  //   event object: { date: date; value: number; notes?: string}
  //   valueFormat stored separately
}

export interface GoalEvent {
  date: Date;
  value: number;
  notes?: string;
}

export const exampleGoalsArray: Goal[] = [
  {
    name: "May Deadline",
    goalValue: 100,
    description: "Finish this project in May",
    valueFormat: "days",
    events: [
      {
        date: new Date(2024, 10, 5),
        value: 0,
      },
      { date: new Date(2024, 10, 7), value: 50 },
    ],
  },
  {
    name: "Name Goal 400 004 laoG emaN Name Goal 400 004 laoG emaN Name Goal 400 004 laoG emaN",
    goalValue: 100,
    description: "Finish this project in May",
    valueFormat: "days",
    events: [
      {
        date: new Date(2024, 10, 5),
        value: 0,
      },
      { date: new Date(2024, 10, 7), value: 30 },
    ],
  },
  {
    name: "Goal Name 300",
    goalValue: 45,
    description: "Finish this project in May",
    valueFormat: "kg",
    events: [
      {date: new Date(2024, 10, 5), value: 0},
      { date: new Date(2024, 10, 6), value: 15, notes: "Name Goal 400 004 laoG emaN Name Goal 400 004 laoG emaN Name Goal 400 004 laoG emaN"},
      { date: new Date(2024, 10, 9), value: 30 },
            {date: new Date(2024, 10, 5), value: 0},
      { date: new Date(2024, 10, 6), value: 15, notes: "Name Goal 400 004 laoG emaN Name Goal 400 004 laoG emaN Name Goal 400 004 laoG emaN"},
      { date: new Date(2024, 10, 9), value: 30 },
    ],
  },
  {
    name: "Goal Name 100",
    goalValue: 100,
    description: "Finish this project in May",
    valueFormat: "days",
    events: [
      {
        date: new Date(2024, 10, 5),
        value: 0,
      },
      { date: new Date(2024, 10, 7), value: 50 },
    ],
  },
];
