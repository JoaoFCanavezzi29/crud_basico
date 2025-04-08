module.exports = (sequelize, DataTypes) => {
    const Aluno = sequelize.define(
        "Aluno",{
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            data_nascimento: {
                type: DataTypes.DATEONLY
            }
        });
        return Aluno;
};