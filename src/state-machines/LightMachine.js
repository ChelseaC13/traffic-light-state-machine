import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
  
  id: "change",
  initial: "GreenOn",
  states: {
    GreenOn: {
      on: {
        next: "YellowOn",
      },
    },
    YellowOn: {
      on: {
        next: "RedOn",
      },
    },
    RedOn: {
      on: {
        next: "GreenOn",
      },
    },
  },
});


const service = interpret(lightMachine);

export { lightMachine, service };