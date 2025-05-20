import { getDataSource } from "../../data-source.js";

export default function typeOrmContextMiddleware(req, res, next) {
  const actor = req.user?.name || "anonymous";

  // QueryRunner üzerinden kullanıcı bilgisi ekleniyor
  const dataSource = getDataSource();
  const queryRunner = dataSource.createQueryRunner();
  queryRunner.data = { user: { name: actor, id: req.user?.id || null } };

  // QueryRunner'ı işlem boyunca aktif tut
  req.queryRunner = queryRunner;

  next();
}
