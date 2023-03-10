import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const weddingcake = await prisma.strains.upsert({
        where: { id: 1 },
        update: { },
        create: {
            id: 1,
            strain: 'wedding cake',
            dominant: 'indica', 
            funfact: 'leafly strain of the year 2019',
            parents: 'triangle kush, animal mints'
        }
    })
    const GorillaGlue4 = await prisma.strains.upsert({
        where: { id: 2 },
        update: { },
        create: {
            id: 2,
            strain: 'GorillaGlue#4',
            dominant: 'sativa', 
            funfact: 'sticks to fingers and scissors',
            parents: 'sour dubb, chocolate diesel'
        }
    })
    const DoSiDos = await prisma.strains.upsert({
        where: { id: 3 },
        update: { },
        create: {
            id: 3,
            strain: '',
            dominant: 'indica-hybrid', 
            funfact: 'gender-fluid',
            parents: 'girl scout cookies, face off OG'
        }
    })
    const mimosa = await prisma.strains.upsert({
        where: { id: 4 },
        update: { },
        create: {
            id: 4,
            strain: 'mimosa',
            dominant: 'sativa-hybrid', 
            funfact: 'smells and tastes like mimosa',
            parents: 'purple punch, clementine'
        }
    })
    const cherrypie = await prisma.strains.upsert({
        where: { id: 5 },
        update: { },
        create: {
            id: 5,
            strain: 'cherry pie',
            dominant: 'indica-hybrid', 
            funfact: 'effects in minutes, lasts for hours',
            parents: 'indica GDP, sativa durban poison'
        }
    })
    const whitewidow = await prisma.strains.upsert({
        where: { id: 6 },
        update: { },
        create: {
            id: 6,
            strain: 'white widow',
            dominant: 'balanced-hybrid', 
            funfact: 'growers prefer the original',
            parents: 'south indian indica, brazilian sativa landrace'
        }
    })
    const pineapplexexpress = await prisma.strains.upsert({
        where: { id: 7 },
        update: { },
        create: {
            id: 7,
            strain: 'pineapple express',
            dominant: 'sativa', 
            funfact: 'meteorology: hawaiian water vapor',
            parents: 'indica GDP, sativa durban poison'
        }
    })
}
    // const sourog = await prisma.strains.upsert({
    //     where: { id: 8  },
    //     update: { },
    //     create: {
    //         id: 8,
    //         strain: 'sourog',
    //         dominant: 'sativa', 
    //         funfact: 'more sour than regular sour',
    //         parents: 'sour og'
    //     }
    // })
//     const weddingcake = await prisma.strains.upsert({
//         where: { id: 1  },
//         update: { },
//         create: {
//             id: 2,
//             strain: 'sourog',
//             dominant: 'sativa', 
//             funfact: 'more sour than regular sour',
//             parents: 'sour og'
//         }
//     })
// }
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })




