// import { projectStatusOptions, taskAssigneeOptions } from '@/utils/options';

import { projectStatusOptions, taskAssigneeOptions } from "../options"

const status = projectStatusOptions
const assigned = taskAssigneeOptions

export const projectTableData = [
    {
        "id": 1,
        "project-name": {
            "title": "Spark: This name could work well for a project related to innovation, creativity, or inspiration.",
            "img": "/images/brand/app-store.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Korhan Afsar",
            "img": "/images/avatar/1.png"
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'in-projress' }
    },
    {
        "id": 2,
        "project-name": {
            "title": "Nexus: This name could work well for a project related to connectivity, bringing different people or ideas together, or solving complex problems.",
            "img": "/images/brand/dropbox.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Korhan Afsar",
            "img": "/images/avatar/2.png"
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'not-started' }
    },
    {
        "id": 3,
        "project-name": {
            "title": "Velocity: This name could work well for a project related to speed, efficiency, or productivity.",
            "img": "/images/brand/facebook.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Korhan Afsar",
            "img": ""
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'on-hold' }
    },
    {
        "id": 4,
        "project-name": {
            "title": "Catalyst: This name could work well for a project related to driving change or transformation.",
            "img": "/images/brand/figma.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Korhan Afsar",
            "img": ""
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'declined' }
    },
    {
        "id": 5,
        "project-name": {
            "title": "Odyssey: This name could work well for a project related to exploration, adventure, or discovery.",
            "img": "/images/brand/github.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Korhan Afsar",
            "img": "/images/avatar/3.png"
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'finished' }
    },
    {
        "id": 6,
        "project-name": {
            "title": "Synergy: This name could work well for a project related to collaboration or teamwork, where multiple parts come together to create a greater whole.",
            "img": "/images/brand/gitlab.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Cute Green",
            "img": "/images/avatar/4.png"
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'in-projress' }
    },
    {
        "id": 7,
        "project-name": {
            "title": "Zenith: This name could work well for a project related to achieving the highest point or peak of success.",
            "img": "/images/brand/gmail.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Leach Henry",
            "img": ""
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'not-started' }
    },
    {
        "id": 8,
        "project-name": {
            "title": "Momentum: This name could work well for a project related to maintaining forward motion and progress.",
            "img": "/images/brand/instagram.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Audrey Korhan",
            "img": "/images/avatar/5.png"
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'on-hold' }
    },
    {
        "id": 9,
        "project-name": {
            "title": "Horizon: This name could work well for a project related to exploring new frontiers or expanding into new areas.",
            "img": "/images/brand/paypal.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Elliot Nancy",
            "img": ""
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'declined' }
    },
    {
        "id": 10,
        "project-name": {
            "title": "Zenith: This name could work well for a project related to achieving the highest point or peak of success.",
            "img": "/images/brand/google-drive.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Della Henry",
            "img": "/images/avatar/7.png"
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'finished' }
    },
    {
        "id": 11,
        "project-name": {
            "title": "Momentum: This name could work well for a project related to maintaining forward motion and progress.",
            "img": "/images/brand/instagram.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Nancy Della",
            "img": "/images/avatar/8.png"
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'in-projress' }
    },
    {
        "id": 12,
        "project-name": {
            "title": "Synergy: This name could work well for a project related to collaboration or teamwork, where multiple parts come together to create a greater whole.",
            "img": "/images/brand/gitlab.png",
            "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        "customer": {
            "name": "Jon Audrey",
            "img": "/images/avatar/9.png"
        },
        "start-date": "2025-04-05",
        "end-date": "2025-04-10",
        "assigned": { assigned, defaultSelect: 'korhanafsar@gmail.com' },
        "status": { status, defaultSelect: 'not-started' }
    },
]