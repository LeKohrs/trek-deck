<template>
  <div id="app">
      <input class="search" type="text" v-model="search" placeholder="Search Cards" />
      <div class="cards">
          <div v-for="card in filteredCards" class="card">
             <clazy-load :src="['/src/' + card.card.img]">
                 <img :src="['/src/' + card.card.img]" slot="image"/>
                  <div slot="placeholder">
                      Loading...
                  </div>
             </clazy-load>
          </div>
      </div>
  </div>
</template>

<script>
const dbRefObject = firebase.database();
let cards;
export default {
    name: 'app',
    data() {
        return {
            cards: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://trek-deck.firebaseio.com/cards.json').then(function(data){
            return data.json();
        }).then(function(data) {
            let cardsArray = [];
            for(let key in data) {
                data[key].id = key;
                // console.log(data[key]);
                cardsArray.push(data[key]);
            }
            this.cards = cardsArray;
            // console.log(this.cards);
        })
    },
    methods: {
        post: function() {
            dbRefObject.child(nameId).set({
                card
            }, function(error) {
                if(error) {
                    // alert("Data could not be saved. " + error);
                } else {
                    // alert("Data saved successfully.");
                }
            });
        }
    },
    computed: {
        filteredCards: function() {
            return this.cards.filter((card) => {
                return card.card.text.match(this.search);
            })
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.card {
    width: calc(25% - 30px);
    max-width: 300px;
}
.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
}
.search {
    width: 95%;
}
img {
    width: 100%;
}
</style>
