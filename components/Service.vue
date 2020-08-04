<template>
  <section
    class="max-w-screen-lg w-full mx-auto flex flex-col pb-48 md:pb-32 items-center"
  >
    <div class="w-full flex items-start justify-start">
      <div class="md:flex-1">
        <div
          class="header-text h-20 md:h-32 md:max-w-xl max-w-full md:pr-20 md:pl-0 px-4"
        >
          <h2
            class="font-bold leading-none text-1xl md:text-3xl md:text-left text-center"
          >
            {{ data[indexService].title.toUpperCase() }}
          </h2>
        </div>
        <div
          class="md:max-w-sm w-full p-5 md:p-0 max-w-full relative md:hidden flex justify-center md:justify-end"
        >
          <div v-swiper:mySwiper="swiperOption" class="container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="banner in banners[indexService]"
                :key="banner"
              >
                <div class="slide">
                  <div class="wrapper-img">
                    <img :src="banner" class="img" alt="Logos" />
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
        </div>
        <div class="mr-0 md:mr-24 text-secondary font-normal px-4 lg:px-0">
          <div class="content" v-html="data[indexService].info"></div>
          <ul class="mt-12">
            <li
              class="my-4 flex items-start"
              v-for="(item, index) in data[indexService].list"
              :key="index"
            >
              <img :src="icon" alt="check" class="mr-6" />
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
        <div
          v-if="data[indexService].info2"
          class="mr-0 mt-6 md:mr-24 text-secondary font-normal px-4 lg:px-0"
          v-html="data[indexService].info2"
        ></div>
      </div>
      <div class="max-w-sm w-full relative justify-end hidden md:flex hight">
        <div v-swiper:mySwiper2="swiperOption" class="container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="banner in banners[indexService]"
              :key="banner"
            >
              <div class="slide">
                <div class="wrapper-img">
                  <img :src="banner" class="img" alt="Logos" />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </div>
    <nuxt-link
      to="/servicios"
      class="mt-3 md:mt-6 mb-4 md:mb-0 flex items-center justify-center ite"
    >
      <span class="leading-none">OTROS SERVICIOS</span>
      <span class="icon leading-none -mt-2">&#8250;</span></nuxt-link
    >
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  props: {
    indexService: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        },
      },
      banners: [
        [
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595661762/madireco/IMG-20190811-WA0007_zyih0b.jpg',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595661763/madireco/IMG-20190811-WA0017_m1glq0.jpg',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595661762/madireco/IMG-20190811-WA0010_gbtnmy.jpg',
        ],
        [
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595662936/madireco/20191114_085617_k1vfks.jpg',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595664634/madireco/01_lnq0sy.jpg',
        ],
        [
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595666047/madireco/20190317_002414_mer3sy.jpg',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595665987/madireco/unicentro_antes_y_despues_hmc8za.jpg',
        ],
        [
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595691255/madireco/20191104_093513_pbmyg5.jpg',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595691256/madireco/20191104_095022_wtihqr.jpg',
        ],
        [
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595691525/madireco/IMG_9746_mh7bas.jpg',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595691942/madireco/mesfer-contruccion-acero_jth3s6.jpg',
        ],
        [
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595692679/madireco/IMG-20200304-WA0052_n4rryk.jpg',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595692761/madireco/IMG-20180711-WA0013_y6mcbl.jpg',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595693023/madireco/Imagen1_qmbxdn.png',
          'https://res.cloudinary.com/dnqzkk56y/image/upload/w_550,h_600,c_crop,c_fill,r_10/v1595693057/madireco/Imagen2_nvj1sy.png',
        ],
      ],

      icon: require('~/assets/check.svg'),
      data: [
        {
          title: 'ASESORÍAS',
          info:
            '<p class="mt-12">MADIRECO SERVICES cuenta con <strong>personal capacitado</strong> para poderles brindar la mejor asesoría en los proyectos de ingeniería civil, ingeniera eléctrica y climatización. estamos convencidos que somos el mejor aliado para nuestros clientes, creando el mejor grupo de trabajo.</p> <p class="mt-6">Para una mejor asesoría a nuestros clientes entregamos:</p>',
          list: [
            '<p><strong>Render:</strong> Para una mejor visualización de cómo quedaran sus proyectos y en que invertirán su dinero, ya que estos diseños es lo más cercano a la realidad.</p>',
            '<p><strong>Planos arquitectónicos:</strong> Es un documento gráfico en el que plasmamos el diseño de lo que será un proyecto, es la representación de cómo se distribuirán los espacios en una construcción.</p>',
            '<p><strong>Memorias de cálculo:</strong> Son los procedimientos descritos de forma detallada de cómo se realizaron los cálculos de las ingenierías que intervienen en el desarrollo de un proyecto.</p>',
          ],
          info2: '',
        },
        {
          title: 'LIMPIEZA Y MANTENIMIENTO',
          info:
            '<p class="mt-12">Acorde a las necesidades de cada cliente, realizamos <strong>planes de mantenimiento</strong> preventivo de la infraestructura o equipos. <p class="mt-6">Contamos con personal técnico capacitado para trabajo en alturas, de acuerdo a lo dispuesto la resolución 1409, contemplando todos los parámetros del sistema de gestión de seguridad y salud en el trabajo.</p></p> <p class="mt-6">Realizamos toda clase de impermeabilización para:</p>',
          list: [
            '<p>Eliminación de humedades</p>',
            '<p>Eliminación de goteras</p>',
            '<p>Dentro de impermeabilizantes: <strong>Asfálticos,</strong> <strong>Acrílicos</strong> y <strong>Cementos</strong></p>',
          ],
          info2: '',
        },
        {
          title: 'REMODELACIÓN Y CONSTRUCCIÓN',
          info:
            '<p class="mt-12">Madireco services sas les ofrece todo lo relacionado con la obra civil, poniendo a disposición todo <strong>nuestro recurso humano</strong> para llevar a cabo las ideas que tienen proyectadas. <p class="mt-6">Realizamos remodelaciones satisfaciendo las necesidades de nuestros clientes para hacer más efectivas las empresas. Demoliciones y replanteos de áreas para adecuación de nivel de piso.</p> <p class="mt-6">La construcción en seco es hoy dia una de las preferencias en el mercado, por su rápida construcción y adaptabilidad a los espacios, diseñamos, planeamos y ejecutamos proyectos con sistemas livianos tales como:</p>',
          list: [
            '<p>Divisiones en drywall</p>',
            '<p>Superboard</p>',
            '<p>Cielos rasos</p>',
            '<p>PVC e Icopor</p>',
          ],
          info2: '',
        },
        {
          title: 'Electricidad de medio y baja tensión',
          info:
            '<p class="mt-12">Asesoramos y ejecutamos proyectos eléctricos de media y baja tensión, de igual manera, realizamos mantenimiento preventivos, correctivos y predictivos a los sistemas eléctricos.</p><p class="mt-6">Realizamos  <strong>mediciones de resistencia</strong> de puesta a tierra por medio de telurómetro, para así cumplir con normatividad RETIE</p>',
          list: [
            '<p>Mantenimiento preventivo de Sistemas eléctricos, transformador seco de 440v</p>',
          ],
          info2:
            '<p>Con el fin de evitar riesgos eléctricos debido a la humedad y el agua en las instalaciones eléctricas, artículo 9.3 del Retie, se requiere hacer mantenimientos preventivos, previniendo riesgos de origen eléctrico, ya que estos obligan a saber identificar y valorar las situaciones irregulares.</p>',
        },
        {
          title: 'Carpintería metálica',
          info:
            '<p class="mt-12">Ofrecemos soluciones en soldadura y montajes estructurales para proyectos industriales, comerciales y residenciales.</p>',
          list: ['<p>Adecuación de parqueadero con hierro estructural</p>'],
        },
        {
          title: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO AIRE ACONDICIONADO',
          info:
            '<p class="mt-12">Ponemos a su disposición nuestra experiencia profesional y técnica para la conservación de sus equipos de aire acondicionado.</p> <p class="mt-6" > Realizaremos una <strong>inspección detalla</strong> de cada uno de los sistemas de aire, cada mantenimiento preventivo incluye la limpieza interior y exterior, lubricación, ajuste de sistemas mecánicos, eléctricos y electrónicos.</p>',
          list: [
            '<p><strong>Ventas y suministros:</strong> Equipos de aire acondicionado, y todo lo relacionado con la refrigeración industrial a los mejores precios.</p>',
            '<p> <strong>Ventilación Industrial (Mecánica):</strong> Ofrecemos siempre una buena solución a sus necesidades de ventilación. Calor, polvo, humo, gases, condensaciones, olores, etc. En todo tipo de volúmenes, bodegas, naves industriales, talleres, almacenes, polideportivos, granjas, invernaderos, oficinas, edificios, garajes, etc; dando una solución perfecta a cada necesidad.</p>',
            '<p> <strong>Instalación de equipos de aire acondicionado:</strong> Instalamos sistemas de aire acondicionado con refrigerantes ecológico, y con tecnología de punta invertir, sistemas automatizados que regulan su funcionamiento a la necesidad, logrando obtener un bajo consumo energético.</p>',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.size-image {
  max-width: 360px;
  @apply w-full mt-10 h-full;
}
.size-image-small {
  max-width: 260px;
  @apply w-full -mt-6;
}
.header-text {
  @apply flex bg-primary-super-light text-primary flex-col justify-center relative;
}
.header-text::before {
  content: ' ';
  @apply w-32 h-full  bg-primary-super-light absolute;
  left: -8rem;
}
.hight {
  margin-top: -5px;
}
.icon {
  font-size: 2rem;
  margin-left: 10px;
}
</style>
