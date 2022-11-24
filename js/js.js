let hotel = [
[
      {
        room: 1,
        price: 300,
        brand: "Luxe",
        children: false,
      },
      {
        room: 2,
        price: 4000,
        brand: "Deluxe",
        children: true,
      },
      {
        room: 3,
        price: 1000,
        brand: "Deluxe",
        children: false,
      },
      {
        room: 4,
        price: 900,
        brand: "Luxe",
        children: true,
      },
    ],
  [
    {
      room: 5,
      price: 700,
      brand: "Luxe",
      children: true,
    },
    {
      room: 6,
      price: 79000,
      brand: "President",
      children: true,
    },
    {
      room: 7,
      price: 600,
      brand: "Luxe",
      children: false,
    },
    {
      room: 8,
      price: 950,
      brand: "Luxe",
      children: true,
    },
  ],
  [
    {
      room: 9,
      price: 1900,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 10,
      price: 5000,
      brand: "Deluxe",
      children: true,
    },
    {
      room: 11,
      price: 1000,
      brand: "Deluxe",
      children: false,
    },
    {
      room: 12,
      price: 250,
      brand: "Luxe",
      children: false,
    },
  ],
  [
    {
      room: 13,
      price: 10000,
      brand: "President",
      children: true,
    },
    {
      room: 11,
      price: 8000,
      brand: "President",
      children: false,
    },
  ],
]

let dota = function(hotel){
    //1 отфильтровать по категориям
let brands = {
    president: [],
    deluxe: [],
    luxe: [],
  };
  
  for (let item of hotel) {
    if (typeof item === "object") {
      for (let elem of item) {
        if (elem.brand === "President") {
          brands.president.push(elem);
        } else if (elem.brand === "Deluxe") {
          brands.deluxe.push(elem);
        } else if (elem.brand === "Luxe") {
          brands.luxe.push(elem);
        }
      }
    }
  }
  
  console.log(brands);
  
  //2 добавить ключ eting с буленовым значением в каждый номер
  
  for (let item of hotel) {
    for (let elem of item) {
      elem.eting = true;
    }
  }
  
  //3 посчитать и красиво раставить все команты переменную rooms
  let rooms = {
    all_roms: [],
    rooms: 0,
  };
  
  for (let item of hotel) {
    for (let elem of item) {
      rooms.all_roms.push(elem);
    }
  }
  
  rooms.rooms = rooms.all_roms.length;
  
  console.log(rooms);
  
  //4 найти самую дорогую комнату
  
  let maxRoom = [];
  
  for (let item of rooms.all_roms) {
    maxRoom.push(item.price);
  }
  
  console.log(maxRoom);
  
  let maxRooM = Math.max.apply(null, maxRoom);
  let MaxRooM = [];
  MaxRooM.push(maxRooM);
  
  console.log("Самая дорогая комната-" + MaxRooM);
  
  //5 посчитать сколько стоит каждый этаж
  let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
  };
  
  //6 посчитать сколько стоят все комнаты вместе взятые
  let total_price = 0;
  for (let item of hotel) {
    for (let elem of item) {
      total_price = total_price + elem.price;
    }
  }
  
  console.log("все комнаты вместе взятые-" + total_price);
  
  //7 найти все комнаты в которых живут дети
  
  let children_room = [];
  
  for (let item of hotel) {
    for (let elem of item) {
      if (elem.children !== false) {
        children_room.push(elem);
      }
    }
  }

  console.log(children_room);
}
dota(hotel)