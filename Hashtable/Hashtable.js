class HashTable {
    constructor() {
      this.bucket = new Array(127);
      this.size = 0;
    }

    hash(key) {
      let sum = 0;
      for (let i = 0; i < key.length; i++) {
        sum += key.charCodeAt(i);
      }
      return sum % this.bucket.length;
    }

    set(key, value) {
      let index = this.hash(key);
      if (this.bucket[index]) {
        for (let i = 0; i < this.bucket[index].length; i++) {
          if (this.bucket[index][i][0] === key) {
            this.bucket[index][i][1] = value;
            return;
          }
        }
      } else {
        this.bucket[index] = [];
      }
      this.bucket[index].push([key, value]);
      this.size++;
    }

    delete(key) {
      let index = this.hash(key);
      if (this.bucket[index]) {
        for (let i = 0; i < this.bucket[index].length; i++) {
          if (this.bucket[index][i][0] === key) {
            this.bucket[index].splice(i, 1);
            this.size--;
            return;
          }
        }
      }
      return false;
    }

    get(key) {
      let index = this.hash(key);
      for (let i = 0; i < this.bucket[index].length; i++) {
        if (this.bucket[index][i][0] === key) {
          return this.bucket[index][i][1];
        }
      }
      return undefined;
    }
  }

  let collection = new HashTable;

  collection.set("Bb", "first");
  collection.set("Ca", "last");
  collection.delete("Ca");
  console.log(collection.get("Bb"));
  console.log(collection.get("Ca"));