<template>
  <a-layout>
    <Header />
    <Banner />
    <CompanyIntro />
    <ProductAdvantages />
    <ContactForm />
    <Footer />
  </a-layout>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import CompanyIntro from '@/components/CompanyIntro.vue'
import ProductAdvantages from '@/components/ProductAdvantages.vue'
import ContactForm from '@/components/ContactForm.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Banner, CompanyIntro, ProductAdvantages, ContactForm, Footer }
}
</script>