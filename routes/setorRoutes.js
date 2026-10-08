import  express  from "express";
import { cadastrarSetor, listarSetor, atualizarSetor, deletarSetor, buscarSetor} from "../controller/setorController.js";

const router = express.Router();


router.post ("/", cadastrarSetor);
router.get("/", listarSetor);
router.patch("/:indice", atualizarSetor);
router.delete("/:indice", deletarSetor);
router.get("/:indice", buscarSetor);



export default router;