import { Router, Request, Response } from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render("index.njk");
});

router.get('/design', (req: Request, res: Response) => {
    res.render("design.njk");
});

// Export the express.Router() instance to be used by server.ts
export const MainController: Router = router;