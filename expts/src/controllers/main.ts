import { Request, Response } from 'express';
import path from "path";

const index = (req: Request, res: Response) => {
    res.render('main/index', { layout: 'main' });
};

const lorem = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../public/html", "index.html"));
};

const hb1 = (req: Request, res: Response) => {
    res.render("main/hb1", { layout: 'main', tipo: 'framework', nome: 'express' });
};

const hb2 = (req: Request, res: Response) => {
    res.render("main/hb2", { layout: 'main', name: 'React', type: 'library', poweredByNodejs: true });
};

const hb3 = (req: Request, res: Response) => {
    const profes = [
        { nome: "David Fernandes", sala: 1238 },
        { nome: "Horácio Fernandes", sala: 1233 },
        { nome: "Edleno Moura", sala: 1236 },
        { nome: "Elaine Harada", sala: 1231 },
    ];
    res.render("main/hb3", { profes, layout: 'main' });
};

const hb4 = (req: Request, res: Response) => {
    const profes = [
        { nome: "David Fernandes", sala: 1238 },
        { nome: "Horácio Fernandes", sala: 1233 },
        { nome: "Edleno Moura", sala: 1236 },
        { nome: "Elaine Harada", sala: 1231 },
    ];
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
       ];
    res.render("main/hb4", { profes, technologies, layout: 'main' });
};

export default { index, lorem, hb1, hb2, hb3, hb4 };