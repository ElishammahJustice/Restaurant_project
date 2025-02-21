<template>
     <v-container>
        <v-card color="teal-darken-4" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>
   <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key="item">
                    <v-card>
                        <v-card color="teal-darken-4">
                            <v-card-item>
                                <v-card-title>{{item.name}}</v-card-title>
                                <v-card-subtitle>{{item.description}}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover></v-img>
                            <v-card-text>
                              {{item.price}}
                            </v-card-text>
                            <v-btn @click="addToOrder(item)">ORDER</v-btn>
                        </v-card>
                     </v-card>
                 </v-col>
             </v-row>
         </v-container>
     </v-card>
    </v-container>
    <v-container>
        <v-card color="teal-darken-4" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
const menuItems = [
    {
        name: "Seared Kenyan Beef Carpaccio",
        price: 2800,
        description: "Tenderloin, truffle aioli, capers, parmesan, rocket.",
        size: "Large",
        offers: "None",
        image: "../public/beef carpacio.jpg"
    },
    {
        name: "Coconut-Crusted Prawns",
        price: 3200,
        description: "Tamarind sauce, mango salsa, crispy coating.",
        size: "None",
        offers: "None",
        image: "../public/prawns.jpg"
    },
    {
        name: "Creamy Pumpkin Soup",
        price: 1900,
        description: "Ginger, coconut milk, sesame, chili oil.",
        size: "None",
        offers: "None",
        image: "../public/pumpkin soup.jpg"
    },
    {
        name: "Grilled Nile Perch",
        price: 4500,
        description: "Lemon-butter sauce, baby potatoes, seasonal greens.",
        size: "None",
        offers: "None",
        image: "../public/tilapia.jpg"
    },
    {
        name: "Kenyan Coffee-Rubbed Fillet Steak",
        price:  6200,
        description: "Ugali croquettes, grilled asparagus, red wine reduction.",
        size: "None",
        offers: "None",
        image: "../public/fillet steak.jpg"
    },
    {
        name: "Herb-Crusted Rack of Lamb",
        price: 6800,
        description: "Minted pea purée, sweet potatoes, red currant.",
        size: "None",
        offers: "None",
        image: "../public/lamb.jpg"
    },
    {
        name: "Vegetarian Delight: Butternut Squash Risotto",
        price: 3900,
        description: "Crispy sage, pine nuts, truffle oil",
        size: "None",
        offers: "None",
        image: "../public/butternut risotto.jpg"
    },
    {
        name: "Tamarind-Glazed Chicken",
        price:  4200,
        description: "Coconut pilau, kachumbari, tangy tamarind glaze.",
        size: "None",
        offers: "None",
        image: "../public/tamarind chicken.jpg"
    },
    {
        name: "Wild Mushroom and Spinach Pasta",
        price: 3700,
        description: "Creamy garlic sauce, parmesan, fresh tagliatelle.",
        size: "None",
        offers: "None",
        image: "../public/wild mushroom pasta.jpg"
    },
    {
        name: "Passion Fruit Cheesecake",
        price: 2200,
        description: "Velvety cheesecake, passion fruit glaze, berries.",
        size: "None",
        offers: "None",
        image: "../public/passion cheese cake.jpg"
    },
    {
        name: "Kenyan Coffee Tiramisu",
        price: 2400,
        description: "Coffee-infused, Amarula, classic layered dessert.",
        size: "None",
        offers: "None",
        image: "../public/kenyan choco tiramisu.jpg"
    },{
        name: "Chocolate Fondant",
        price: 2600,
        description: "Molten center, vanilla ice cream, strawberries",
        size: "None",
        offers: "None",
        image: "../public/chocolate fondant.jpg"
    }
]
//manage the current state of the order
var orderItems = []
var totalOrderAmount = 0

function calculateTotalAmount(price){
    totalOrderAmount += price
}

function addToOrder(item){
    orderItems.push(item)
    calculateTotalAmount(item.price)
}
</script>
