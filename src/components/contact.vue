<template>
  <v-card class="mx-auto" elevation="24" >
    <v-img width="100%" max-height="400" src="../public/contact.jpg" cover>

    </v-img>
  </v-card>


  <!-- Main container for layout with built-in padding and max-width -->
  <v-container>
    <!-- Flex row to organize columns -->
    <v-row>
      <!-- First column (full width on mobile, half on desktop) -->
      <v-col cols="12" md="6">
        <!-- Card container with padding -->
        <v-card class="pa-6">
         
          
          <!-- Form section title -->
          <v-card-title class="text-h4 mb-4">Contact Us</v-card-title>


          <!-- Vuetify form component with validation -->
          <v-form>
            <!-- Name input field -->
            <v-text-field
              label="Name"
              variant="outlined"
              required
            ></v-text-field>

            <!-- Email input field with type validation -->
            <v-text-field
              label="Email"
              type="email"
              variant="outlined"
              required
            ></v-text-field>

            <!-- Message textarea with 4 rows -->
            <v-textarea
              label="Message"
              variant="outlined"
              rows="4"
              required
            ></v-textarea>

            <!-- Primary submit button -->
            <v-btn
              color="primary"
              size="large"
              type="submit"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>

      <!-- Second column (full width on mobile, half on desktop) -->
      <v-col cols="12" md="6">
        <!-- Card container with padding -->
        <v-card class="pa-6">
          <!-- Contact info section title -->
          <v-card-title class="text-h4 mb-4">Our Location</v-card-title>
          
          <!-- Address with map marker icon -->
          <div class="mb-4">
            <v-icon class="mr-2">mdi-map-marker</v-icon>
            foodisland, Woodvale Grove, Westlands
          </div>

          <!-- Phone number with phone icon -->
          <div class="mb-4">
            <v-icon class="mr-2">mdi-phone</v-icon>
            +254 20 420 8000
          </div>

          <!-- Email address with email icon -->
          <div class="mb-4">
            <v-icon class="mr-2">mdi-email</v-icon>
            foodisland@gmail.com
          </div>

          <!-- Social media icons using v-for loop -->
          <div class="mt-4">
            <v-btn
              class="mx-2"
            ></v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script setup>
// Component logic can be added here if needed
// Example: Form submission handling, data validation, etc.
</script>

<style scoped>
/* Add custom styles if necessary */
/* Example: Custom spacing, colors, or responsive adjustments */
</style>
