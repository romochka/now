export function objType(obj) {
   return /^\[object (\w+)]$/
       .exec(Object.prototype.toString.call(obj))[1]
       .toLowerCase();
}

export function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function cl() {
   const classList = Array.prototype.slice
       .call(arguments)
       .filter((c) => c)
       .map((c) => {
           if (objType(c) === "object") {
               return Object.keys(c)
                   .map((key) => (c[key] === true ? key : false))
                   .filter((c) => c);
           }
           return c;
       })
       .flat(Infinity);

   // console.log(classList);

   return classList.length > 0 ? classList.filter((c) => c).join(" ") : null;
}
