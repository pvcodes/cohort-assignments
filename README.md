# COHORT 2.0

<details>

<summary style>Week 1</summary>

### Strings

<table border=2 >
    <thead>
        <td>Method</td>
        <td>Description</td>
        <td>Example</td>
    </thead>
    <tbody>
        <tr>
         <td><code>length<code></td>
        <td>to get the length of the string</td>
        <td><code lang=js>
        let str = "hello world";
        console.log(str.length); // 11
        <code></td>
        </tr>
        <tr>
       <td><code>indexOf()<code></td>
        <td>to get the index of the given char/string</td>
        <td><code lang=js>
        let str = "hello world";
        console.log(str.indexOf('w')); // 5
        console.log(str.indexOf('orl')); // 6
        <code></td>        
        </tr>
        <tr>
       <td><code>lastIndexOf()<code></td>
        <td>to get the index of the given char</td>
        <td><code lang=js>
        let str = "hello world world";
        console.log(str.lastIndexOf('w')); // 5
        console.log(str.lastIndexOf('wor')); // 11
        <code></td>        
        </tr>
        <tr>
       <td><code>slice(i, j)<code></td>
        <td>slice the string on given index range [i,j)</td>
        <td><code lang=js>
        let str = "hello world";
        console.log(str.slice(2,7)); // 'llo wo'
        <code></td>        
        </tr>
        <tr>
       <td><code>substr(i, n)<code></td>
        <td>get a substring from index <i>i</i> to next n characters</td>
        <td><code lang=js>
        let str = "hello world";
        console.log(str.substr(2,7)); // 'llo wor'
        <code></td>        
        </tr>
    </tbody>
</table>



</details>
