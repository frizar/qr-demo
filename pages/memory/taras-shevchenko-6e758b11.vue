<template>
    <div class="memory text-center">
        <div class="memory__data">
            <img src="/example.jpg" class="memory__portrait" />
            <div class="memory__full-name">{{ memory.name }} {{ memory.surname }}</div>
            <div class="memory__dates">🎂 {{ dates }} 🪦</div>
            <div class="memory__bio">{{ memory.bio }}</div>
        </div>
        <NuxtLink :to="qrUrl" class="memory__url">
            {{ qrUrl }}
        </NuxtLink>
        <img :src="qrSrc" class="memory__qr" />
    </div>
</template>

<script setup>
import QRCode from 'qrcode';

const { public: publicConfig } = useRuntimeConfig();
const { appProtocol, appURL } = publicConfig;
const route = useRoute();
const memory = {
    name: 'Тарас',
    surname: 'Шевченко',
    pin: '',
    birthday: '1814-03-09',
    deathday: '1861-03-10',
    bio: `Тарас Григорович Шевчеенко (25 лютого (9 березня) 1814, с. Моринці, Київська губернія, Російська імперія (нині Звенигородський район, Черкаська область, Україна) — 26 лютого (10 березня) 1861, Санкт-Петербург, Російська імперія) — український поет, прозаїк, мислитель, живописець, гравер, етнограф, громадський діяч. Національний герой і символ України. Діяч українського національного руху, член Кирило-Мефодіївського братства. Академік Імператорської академії мистецтв (1860).\nЛітературна спадщина Шевченка, центральну роль у якій відіграє поезія, зокрема збірка «Кобзар», вважається основою сучасної української літератури та багато в чому літературної української мови.`
};
const qrUrl = `${appProtocol}://${appURL}${route.href}`;
console.log('qrUrl:', qrUrl);
const qrSrc = await QRCode.toDataURL(qrUrl, { errorCorrectionLevel: 'H', width: 300 });

const dates = computed(() => {
    let { birthday, deathday } = memory;

    birthday = getFormattedDate(birthday);
    deathday = getFormattedDate(deathday);

    return `${birthday} - ${deathday}`;
});

function getFormattedDate (date = '') {
    date = new Date(date);

    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
}
</script>

<style lang="scss" scoped>
.memory {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;

    &__portrait {
        margin-bottom: 1rem;
    }

    &__full-name,
    &__dates,
    &__bio {
        margin-top: 1rem;
    }

    &__url,
    &__qr {
        display: block;
        margin-top: 1rem;
    }

    &__portrait,
    &__qr {
        width: 300px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 1rem;
    }
}
</style>
