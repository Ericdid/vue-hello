const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello World",
    };
  },
}).mount("#text");

createApp({
  data() {
    return {
      image_src: "./img/duck.jpg",
    };
  },
}).mount(".duck");
