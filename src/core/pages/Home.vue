<template>
  <div>
    <v-container grid-list-lg>
      <v-layout wrap row justify-center>
        <v-flex xs12 sm6 md8 lg6>
          <v-card>
            <div ref="layout" class="customized-layout text-xs-center"></div>
            <v-divider />
            <v-card-text>
              <v-slider
                v-model="scale"
                min="1"
                max="10" 
                @input="drawLayout"
                append-icon="zoom_in"
                prepend-icon="zoom_out"
                @click:append="zoomIn"
                @click:prepend="zoomOut"
              ></v-slider>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm5 md4 lg3>
          <v-card>
            <v-card-title>
              Measurements <span class="caption grey--text">(inches)</span>
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="Focal Point"
                v-model="focal_point"
                type="number"
                @input="drawLayout"
              ></v-text-field>
              <v-text-field
                label="Wall Height"
                v-model="wall_height"
                type="number"
                @input="drawLayout"
              ></v-text-field>
              <v-text-field
                label="Artwork Height"
                v-model="artwork_height"
                type="number"
                @input="drawLayout"
              ></v-text-field>
              <v-text-field
                label="Artwork Width"
                v-model="artwork_width"
                type="number"
                @input="drawLayout"
              ></v-text-field>
              <v-text-field
                label="Top of Art to Top of Hanging Wire"
                v-model="top_to_wire"
                type="number"
                @input="drawLayout"
              ></v-text-field>
              <v-text-field
                label="Anchor Location from Floor "
                v-model="anchorLocation"
                type="number"
                readonly
              >
              </v-text-field>
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
  name: "Home",
  data: () => ({
    msg: "Message",
    focal_point: 57,
    scale: 4,
    wall_height: 96,
    artwork_height: 12,
    artwork_width: 10,
    top_to_wire: 3
  }),
  created() {
  },
  mounted() {
    this.drawLayout()
  },
  computed: {
    anchorLocation() {
      return Number(this.focal_point) + Number(this.artwork_height / 2) - Number(this.top_to_wire)
    }
  },
  watch: {
    scale: function() {
      this.drawLayout()
    }
  },
  methods: {
    zoomIn() {
      if (this.scale < 11) {
        this.scale = this.scale + 1
      }
    },
    zoomOut() {
      if (this.scale > 0) {
        this.scale = this.scale - 1
      }
    },
    drawLayout() {
      const elem = this.$refs.layout
      let scale  = this.scale
      
      elem.innerHTML = ''
      
      // Do some math
      const svg_height = this.wall_height * scale
      const svg_width = this.artwork_width * scale + 200
      const artwork_height = this.artwork_height * scale
      const artwork_width = this.artwork_width * scale      
      const anchor = this.anchorLocation * scale
      const anchor_location =  svg_height - anchor
      const focal_point = svg_height - this.focal_point * scale
      
      const params = {
        width: svg_width,
        height: svg_height
      }


      const two = new Two(params).appendTo(elem)

      // Draw the artwork
      var rect = two.makeRectangle(svg_width / 2 , focal_point , artwork_width, artwork_height) // x,y,height,width
      rect.fill = '#5d1049'
      rect.opacity = 0.6
      
      // Ceiling Line
      let ceiling_line = two.makeLine(0,0 ,svg_width, 0) // x1,y1,x2,y2
      ceiling_line.stroke = '#a3a3a3'
      ceiling_line.dashes = [1, 1]
      
      // Anchor line
      let anchor_line = two.makeLine(0,anchor_location ,svg_width, anchor_location) // x1,y1,x2,y2
      anchor_line.stroke = '#ff0000'
      anchor_line.dashes = [3, 3]
      two.makeText('Anchor',50,anchor_location - 7, { fill: '#ff0000' })

      let focal_line = two.makeLine(0,focal_point ,svg_width,focal_point) // x1,y1,x2,y2
      focal_line.stroke = '#5d1049'
      focal_line.dashes = [3, 3]
      two.makeText('Focal',svg_width - 50,focal_point - 7, { fill: '#5d1049' })

      let floor = two.makeLine(0,svg_height,svg_width,svg_height) // x1,y1,x2,y2
      floor.stroke = '#5d1049'
      floor.linewidth = 3

      two.update()
    }
  }
};
</script>

<style>
.customized-layout {
  padding: 10px;
  /* border: 1px solid #333333 */
}
</style>