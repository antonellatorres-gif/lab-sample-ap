import  express  from "express";
import { cadastrarAmostra, listarAmostra, atualizarAmostra, deletarAmostra, b, buscarAmostra} from "../controller/amostraController.js";

const router = express.Router();


router.post ("/", cadastrarAmostra);
router.get("/", listarAmostra);
router.patch("/:indice", atualizarAmostra);
router.delete("/: indice", deletarAmostra);
router.get("/: indice", buscarAmostra);



export default router;