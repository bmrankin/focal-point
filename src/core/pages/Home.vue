<template>
  <div>
    <v-container>
      <v-layout wrap row justify-center>
        <!-- <v-flex xs12 sm6 md8 lg6>
          <div ref="layout" class="customized-layout my-5"></div>
        </v-flex> -->
        <v-flex xs12 sm3 md2 lg2>
          <v-card>
            <v-card-text>
              <v-text-field
                label="Focal Point"
                v-model="focal_point"
                type="number"
              ></v-text-field>
              <v-text-field
                label="Artwork Height"
                v-model="artwork_height"
                type="number"
              ></v-text-field>
              <v-text-field
                label="Artwork Width"
                v-model="artwork_width"
                type="number"
              ></v-text-field>
              <v-text-field
                label="Top of Art to Top of Hanging Wire"
                v-model="top_to_wire"
                type="number"
              ></v-text-field>
              <v-text-field
                label="Anchor Location from Floor"
                v-model="anchorLocation"
                type="number"
                readonly
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
  
<script>
import Two from 'two.js'
export default {
  name: "new_page",
  data: () => ({
    msg: "Message",
    focal_point: 57,
    artwork_height: 12,
    artwork_width: 10,
    top_to_wire: 3
  }),
  mounted() {
    // this.drawLayout()
  },
  computed: {
    anchorLocation() {
      return Number(this.focal_point) + Number(this.artwork_height / 2) - Number(this.top_to_wire)
    }
  },
  methods: {
    drawLayout() {
      const elem = this.$refs.layout
      
      const height = this.artwork_height * 10
      const width = this.artwork_width * 10
      // elem.innerHTML = ''

      const params = {
        width: width,
        height: height
      }

      const two = new Two(params).appendTo(elem)

      var rect = two.makeRectangle(213, 100, 100, 100);

      rect.fill = 'rgb(0, 200, 255)';
      rect.opacity = 0.75;

      two.update()
    }
  }
};
</script>

<style>
</style>