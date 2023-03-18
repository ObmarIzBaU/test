ScratchExtensions.register('MeineErweiterung', {
    // Definiere den neuen Block
    blocks: [
      {
        // Definiere den Blocktyp
        opcode: 'zufallszahl',
        
        // Definiere den Text des Blocks
        text: 'zufällige Zahl von 1 bis 10',
        
        // Definiere den Wert des Blocks
        type: Scratch.ArgumentType.NUMBER,
        
        // Definiere den Blocktyp
        blockType: Scratch.BlockType.REPORTER,
        
        // Definiere den Blockstil
        arguments: {
        }
      }
    ],
    
    // Definiere die Blockfunktion
    zufallszahl: function () {
      // Generiere eine zufällige Zahl zwischen 1 und 10
      var zahl = Math.floor(Math.random() * 10) + 1;
      
      // Gib die generierte Zahl zurück
      return zahl;
    }
  });