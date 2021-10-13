CREATE TABLE IF NOT EXISTS `Cadastro` (
  `idCadastro` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `senha` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idCadastro`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


INSERT INTO `Cadastro` (`idCadastro`, `usuario`, `senha`, `createdAt`, `updatedAt`) VALUES
(1, 'Luiz', '10203040', '2021-10-12 22:23:53', '2021-10-12 22:25:53');
COMMIT;