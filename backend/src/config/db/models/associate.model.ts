class AssociationsTable {
    /**
    * Associação entre tabelas
    * @param model 
    * @param foreign 
    * @param alias 
    */
   static associate(modelOrigin, ModelDestin, foreign: string, alias: string){        
       modelOrigin.belongsTo( ModelDestin, {
          foreignKey: {
              name:  foreign
          },
          as: alias
      } ) 
  }
  /**
   * Associa de múltiplas 
   * @param 'Model Origem'
   * @param ModelDestin 
   * @param pivot 
   * @param foreign 
   * @param alias 
   */
  static associateMany(modelOrigin, ModelDestin, pivot:  string,foreign: string, alias: string){        
       modelOrigin.belongsToMany( ModelDestin, {
           foreignKey: foreign,
           through: pivot,
           as: alias
       } ) 
   }
   
   static associateHasMany(modelOrigin, ModelDestin, foreign: string, alias: string){        
       modelOrigin.hasMany( ModelDestin, {
           foreignKey: foreign,
           as: alias
       } ) 
   }
}

export default AssociationsTable