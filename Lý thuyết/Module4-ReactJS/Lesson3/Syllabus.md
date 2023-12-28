# Lesson 3: State & Events

>💡 Một thành phần không thể thiếu nữa trong React. Giúp tạo nên các ứng dụng có nhiều logic phức tạp.

# Lắng nghe các sự kiện với React

Xử lý các sự kiện như “click” với button, “submit” với form là một trong những phần cơ bản của bất cứ ứng dụng web nào. React có cách tiếp cận khá đơn giản với các sự kiện. Xét ví dụ sau:

```jsx
const App = () => {
	
	const onClick = () => {
		console.log("Click me");
	}
	
	return <button onClick={onClick}>Click me</button>
}
```

Có một vài đặc điểm cần lưu ý:

1. Với JSX, các thuộc tính liên quan tới event cần phải được đổi tên theo dạng `camelCase` như đã nói ở bài trước (`onClick` thay vì `onclick`, `onSubmit` thay vì `onsubmit`, ...)
2. Các thuộc tính liên quan tới event cần nhận vào một giá trị là một function Javascript. Vì vậy, chúng cần được sử dụng cú pháp ngoặc nhọn `{}` (`onClick={<function>}` thay vì `onclick=”function()”`)

Cần lưu ý là chúng ta cần truyền giá trị vào là một function cho các sự kiện. Xét ví dụ bên dưới:

```jsx
const App = () => {
	const onClickMe = () => {
		console.log("Click me")
		return null;
	}
	
	return <button onClick={onClickMe()}>Click me</button>
}
```

Ta thấy function `onClickMe()` được truyền vào với dấu ngoặc tròn. Điều này nghĩa là `onClickMe` sẽ được chạy trước, lấy kết quả trả về và truyền vào cho giá trị `onClick` của button. Kết quả trả về của `onClickMe` là `null`, do đó, thực tế thuộc tính `onClick` nhận vào null thay vì một function.

> 🧑‍💻 Hãy thử xử lý sự kiện `onSubmit` của form và tìm cách để có thể gọi được function `preventDefault()` của event submit đó.

Ta có thể đặt một “anonymous function” vào bên trong các thuộc tính event như ví dụ dưới đây.

```jsx
const App = () => {
	return <button onClick={() => { console.log("Hello") }}>Click me</button>
}
```

---

# Component Functions được thực thi như thế nào?

```jsx
const App = () => {
	console.log('App')
	return (
		<div>
			<A />
		</div>
	)
}

const A = () => {
	console.log('A')
	return (
		<div>
			<B />
    </div>
	)
}

const B = () => {
	console.log('B')
	return (
		<div>
			Hello React
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('app'))
```

Các function `App`,`A` và `B` không được gọi ở bất cứ đâu trong ứng dụng trên. Thay vào đó, chúng được sử dụng với cú pháp đặc biệt của JSX, giống như những thử HTML. React sẽ thực hiện chạy các function component đó, thực hiện lấy kết quả trả về và render thành ứng dụng web. React sẽ tiến hành tuần tự như vậy cho tới khi không còn function nào nữa.

Như ở ví dụ trên, khi được chạy, chúng ta sẽ thấy lần lượt các giá trị “App”, “A” và “B” được hiển thị ra màn hình.

Như vậy, mặc dù các function component không được gọi trực tiếp ở bất cứ đâu trong ứng dụng, thực chất chúng được thực thi mỗi lần chúng ta sử dụng cú pháp JSX với chúng.

---

# Cập nhật giao diện với các sự kiện

Xét ví dụ sau:

```jsx
const App = () => {
	
	let count = 0;

	const handleClick = () => {
		count = count + 1;
		console.log("count: ", count)
	}

	return (
		<div>
			<span>{count}</span>
			<button onClick={handleClick}>Increase</button>
		</div>
	)
}
```

Với ví dụ trên, khi ta click vào button, giá trị của biến `count` sẽ được thay đổi. Khi chúng ta mở màn hình console cũng sẽ nhận được giá trị của `count` in ra màn hình. Và chúng ta cũng sẽ mong đợi rằng component `App` sẽ thực hiện việc tính toán lại để thay đổi giá trị trong cặp thẻ `<span>`. Từ đó, giao diện sẽ được cập nhật.

Tuy nhiên thì giao diện sẽ **không** được cập nhật!

Thực tế, các biến thông thường như `count` trong ví dụ trên sẽ không làm cho React thực hiện việc tính toán lại dữ liệu và cập nhật giao diện. React sẽ hoàn toàn bỏ qua sự thay đổi của các biến đó. Khi chúng ta muốn cho React biết rằng nó cần tính toán lại giao diện, chúng ta cần sử dụng một khái niệm đặc biệt từ React: “State”

---

# Sử dụng state với React hooks

State về cơ bản là một giá trị biến đặc biệt trong React. Nó là giá trị mà khi thay đổi, React sẽ tiến hành việc tính toán lại kết quả của component, và từ đó cập nhật lại giao diện. Để sử dụng được state, chúng ta cần import một function từ trong thư viện React là `useState`. `useState` và một số function khác trong thư viện được gọi là các “hooks”. Chúng ta sẽ biết tới các hooks khác của React ở những bài sau.

Cú pháp cơ bản của `useState` như sau:

 

`const <tên_biến_state> = useState(<giá_trị_ban_đầu_của_state>)`

`useState` trong React là một function với đặc điểm sau:

- Tham số đầu vào là một giá trị trong JS, đây cũng là giá trị khởi đầu cho state đó.
- Kết quả trả về là một **array**. Trong đó có 2 phần tử: phần tử thứ nhất là giá trị của state đó, phần tử thứ hai là một function khác.

Xem ví dụ dưới đây:

```jsx
import {useState} from 'react'

const App = () => {
	const countState = useState(10)
	
	console.log("count: ", countState[0]);

	return <div>{countState[0]}</div>
}:
```

Trong ví dụ, trên, chúng ta khởi tạo một biến là `countState` với giá trị ban đầu bằng 10. `countState` có giá trị là một mảng gồm 2 phần tử. Phần tử ở vị trí 0 của `countState` chính là giá trị của state. Ở trong ví dụ trên thì giá trị của nó ban đầu là 10. Do đó, chúng ta sẽ nhìn thấy số 10 được in ra trên màn hình.

Giá trị state đặc biệt hơn các biến thông thường khác: khi thay đổi, React sẽ tiến hành việc tính toán lại kết quả của component và cập nhật lại giao diện. Để có thể cập nhật được giá trị của state. Ta cần sử dụng một function đặc biệt, đó là tham số thứ hai của `countState`:

```jsx
import {useState} from 'react'

const App = () => {
	const countState = useState(10)
	const count = countState[0]
	const setCount = countState[1]

	const onIncreaseClick = () => {
		setCount(count + 1)
	}	

	return (
		<div>
			<span>{count}</span>
			<button onClick={onIncreaseClick}>Increase</button>
		</div>
	)
}
```

Function `setCount` nhận vào một tham số là giá trị tiếp theo mà state đó sẽ nhận. Như ở ví dụ trên, ban đầu, giá trị của `count` là 10. Sau khi click vào button “Increase”, giá trị của mới của `count` sẽ bằng giá trị cũ của nó cộng thêm 1 đơn vị.

>💡 Các function sử dụng để cập nhật giá trị của state thường được gọi là `setState`

>📌 Trong thực tế, người ta thường sử dụng cú pháp destructuring để khai báo biến `state` và `setState`. Cú pháp như sau:
`const [count, setCount] = useState(10)`
Trong các phần sau, chúng ta sẽ chủ yếu sử dụng cú pháp này.

>🤔 State chính là công cụ để React có thể được viết dưới dạng declarative thay vì imperative. Hãy thảo luận thêm về vấn đề này trong phần lab.

---

# Hiểu rõ hơn về state trong React

### State là giá trị riêng và độc lập giữa từng thực thể component.

Xem ví dụ sau:

```jsx
const App = () => {
	return (
		<div>
			<Counter />
			<Counter />
			<Counter />
		</div>
	)
}

const Counter = () => {
	const [count, setCount] = useState(0)

	const onIncrease = () => {
		setCount(count + 1)		
	}

	return (
		<div>
			<div>{count}</div>
			<button onClick={onIncrease}>Increase</button>
		</div>
	)
}
```

Trong ví dụ trên, ta thấy có tới 3 “thực thể” của component `Counter` được sử dụng trong component `App`. Và khi click vào mỗi một button “Increase” riêng biệt, ta thấy các giá trị đếm của từng component `Counter` không giống nhau. Điều này nghĩa là các giá trị state trong React là hoàn toàn riêng biệt giữa các thực thể của một component. Khi ta cập nhật một giá trị trong mỗi thực thể, các thực thể còn lại hoàn toàn không chịu ảnh hưởng từ việc thay đổi đó.

### Tại sao với state luôn dùng `const` thay vì `let`

Xem ví dụ sau:

```jsx
const Counter = () => {
	let [count, setCount] = useState(0)

	const onIncrease = () => {
		count = count + 1
	}
		
	return (
		<div>
			<span>{count}<span>
			<button onClick={onIncrease}>Increase</button>
		</div>
	)
}
```

Với ví dụ trên, khi ta click vào button Increase, giá trị của count sẽ không thay đổi.

Việc cập nhật state với React không chỉ đơn giản ở việc cập nhật lại giao diện. Có những tính toán ở bên trong React để nó có thể nhận biết được phần nào của ứng dụng web cần được cập nhật. Vì vậy, việc cập nhật state thông qua hàm `setState` của nó là cần thiết để React có thể thực hiện các tính toán cần thiết.

Do đó, việc gán lại dữ liệu cho state nhờ việc khai báo với `let` là hoàn toàn không cần thiết. Việc sử dụng phép gán để cập nhật dữ liệu sẽ không giúp cho ứng dụng React được cập nhật. Sử dụng `const` để khai báo sẽ giúp lập trình viên hiểu được rằng việc gán lại dữ liệu cho state là không thể, và buộc phải dùng `setState`.

### Cập nhật dữ liệu dạng reference.

Xem ví dụ sau:

```jsx
const App = () => {
	const [person, setPerson] = useState({name: "T3H", age: 10})

	const increaseAge = () => {
		person.age = person.age + 1;
		setPerson(person);
	}

	return (
		<div>
			<p>Hello! I'm {person.name}. I'm {person.age} years old.</p>
			<button onClick={increaseAge}>Increase age</button>
		</div>
	)	
}
```

Trong ví dụ trên, `person` là một state trong `App` , và kiểu dữ liệu của nó là một object.

Khi người dùng click vào button “Increase Age”, chúng ta thực hiện tăng số tuổi lên một. Tuy nhiên, giao diện của ứng dụng sẽ **KHÔNG** được cập nhật.

Lý do ở đây là khi function `setPerson` được gọi, React sẽ tiến hành so sánh giá trị của state cũ và giá trị mới sắp được cập nhật. Trong trường hợp này, kiểu dữ liệu `object` là dạng reference. Khi ta gán `person.age = person.age + 1`, cũng có nghĩa là đã cập nhật lại giá trị cũ của person. Nên khi so sánh, React sẽ thấy hai giá trị cũ và mới cùng là giá trị, và do đó không tiến hành cập nhật.

Cách làm đúng ở đây là:

```jsx
const increaseAge = () => {
		setPerson({...person, age: person.age + 1});
	}
```

Sử dụng spread operator để copy toàn bộ giá trị của `person` qua một object mới, sau đó sửa lại giá trị `age` tương ứng. Lúc này, giá trị cũ và giá trị mới là hai object khác nhau. React sẽ nhận biết được và cập nhật lại giao diện.

### Cập nhật state dựa vào giá trị cũ của chúng

Trong nhiều trường hợp, các giá trị state mới có thể dựa vào giá trị của state cũ. Lấy ví dụ sau:

```jsx
const App = () => {
	const [person, setPerson] = useState({name: "T3H", age: 10})

	const increaseAge = () => {
	}

	return (
		<div>
			<p>Hello! I'm {person.name}. I'm {person.age} years old.</p>
			<button onClick={increaseAge}>Increase age</button>
		</div>
	)	
}
```

Khi này. Giá trị mới của `person.age` sẽ bằng giá trị `person.age` cũ cộng thêm 1. Ngoài cách làm như ở ví dụ trên, ta còn có thể có cách làm như sau:

```jsx
const increaseAge = () => {
	setPerson((prev) => {
		return {
			...prev,
			age: prev.age + 1
		}
	})
}
```

Lúc này, `setPerson` nhận vào một tham số là một `function` thay vì một `object` như ở trên. Đây là một cú pháp khác của việc thay đổi giá trị với `setState`

`setState( function(<state-hiện-tại>) { return <state-mới> } )`

Function được truyền vào bên trong `setState` có tham số đầu vào là giá trị hiện tại của state, và nó cần phải trả ra giá trị tiếp theo của state đó. Trong ví dụ, ta thấy `prev` chính là dữ liệu của state hiện tại, và chúng ta trả ra một object mới chính là dữ liệu tiếp theo của state. Chúng ta có thể thực hiện thêm các tính toán khác ở bên trong function đó. Lúc này có thể thực hiện các phép tính với `prev`

Cách cập nhật state này có nhiều lợi ích mà chúng ta sẽ nói ở các bài sau.

>🤔 Đọc thêm về React State bằng tiếng Việt ở đây:
https://vi.reactjs.org/docs/hooks-state.html

# Xử lý Form với React

Form là một trong những thành phần luôn xuất hiện trong tất cả các ựng dụng web. Xét ví dụ bên dưới:

```jsx
const App = () => {
	
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" />
			<button type="submit">Submit</button>
		</form>
	)
}
```

Với các function xử lý các event như `handleSubmit`, chúng ta luôn nhận được tham số là event đó. Do đó với form, chúng ta có thể gọi `event.preventDefault()` như trong ví dụ.

Có nhiều cách để có thể lấy được giá trị từ thẻ `input` bên trong form. Tuy nhiên chúng ta sẽ sử dụng state để có thể lấy được giá trị đó ra. Lúc này, ứng dụng sẽ trở thành như sau:

```jsx
import {useState} from 'react'

const App = () => {
	
	const [input, setInput] = useState("")
	
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(input)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={input} />
			<button type="submit">Submit</button>
		</form>
	)
}
```

Lúc này, giá trị của input luôn bằng với giá trị của state `input` được khai báo ở trên.

Tuy nhiên, nếu người dùng cố gắng thay đổi giá trị của thẻ input, thẻ input hoàn toàn không phản ứng lại với sự thay đổi đó.

![state-and-input.png](./images-syllabus/state-and-input.png)

Props trong React không thể bị thay đổi từ bên trong component đó. Thẻ input nhận vào một “props” là `value`. Và nó không thể tự cập nhật value cho chính nó. Tuy nhiên, giá trị value này lại đến từ `input` , là một state trong component `App` . Vì state trong React hoàn toàn có thể thay đổi được giá trị thông qua `setState`, nên chúng ta có thể cập nhật giá trị `input`, qua đó có thể cập nhật được value của input.

Để thay đổi được giá trị của `input` state thông qua việc thay đổi giá trị của thẻ input, ta có thể làm như sau:

```jsx
import {useState} from 'react'

const App = () => {
	
	const [input, setInput] = useState("")
	
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(input)
		setInput("")
	}

	const handleInputChange = (event) => {
		setInput(event.target.value)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={input} onChange={handleInputChange} />
			<button type="submit">Submit</button>
		</form>
	)
}
```

Với việc thay đổi giá trị `input` thông qua event `onChange` của input, ta đã có thể thay đổi và lấy được giá trị nằm trong input. Thêm vào đó, khi muốn thay đổi giá trị bên trong input, ta tìm cách cập nhật `input` state, và React sẽ tiến hành cập nhật giao diện giúp chúng ta.

>🧑‍💻 Hãy tạo form với nhiều loại input như select, checkbox, radio button, text area, ... và xử lý chúng với React state. 
**Nâng cao:** thay vì sử dụng nhiều state cho mỗi input, hãy thử sử dụng 1 state để xử lý nhiều input.

---

# Component tree

Với một ứng dụng thông thường, ta có thể có một cấu trúc như sau:

```jsx
ReactDOM.render(
	<App>
		<Header>
			<UserMenu>
				<UserMenuDropdown />
			</UserMenu>
		</Header>
		<Dashboard>
			<Settings>
				<Profile>
					<ProfileForm />
				</Profile>
				<Payment>
					<PaymentForm />
				</Payment>
			</Settings>
		</Dashboard>
	</App>
)
```

Có nhiều thành phần tạo nên một ứng dụng web. Các component lớn render các component nhỏ hơn, tạo thành một mô hình cây như hình dưới đây:

![Untitled](./images-syllabus/dom-tree.png)

Trong React, mô hình trên được gọi là “component tree”. Ý tưởng của component tree giống với HTML DOM tree, được sử dụng để mô hình hoá giao diện ứng dụng.

>💡 Các khái niệm liên qua tới cây gồm:
>- Node: các điểm nằm trên cây. Tất cả các component trong hình đều là các node
>- Parent Node: Node cha. Là node nằm ngay trên node hiện tại, chịu trách nhiệm render ra nốt hiện tại và các “sibling” của nó. VD: `Settings` là parent node của `Profile`
>- Child Node: Node con. Trái ngược với Parent node. VD: `UserMenu` là node con của `Header`
>- Sibling Nodes: Node anh em. Là các node ngang hàng nhau, có cùng cha: VD: `Profile` và `Payments`
>- Ancestors: tổ tiên. Là các nodes ở trên node cha, chịu trách nhiệm render ra node cha.
>VD: `DashBoard` `App` là các node ancestors của Settings. `Header` **không** **phải** là ancestor của `Settings`
>- Descendants: con cháu. Là các node được render từ node hiện tại. VD: `Profile` `Payment` là các node descendant của `Settings`. `UserMenuDropdown` **không phải** là descendants của `Settings`.
>- Sub tree: Cây con. Là tập hợp các node bắt đầu từ node hiện tại. VD: sub tree từ `Settings` sẽ bao gồm `Profile` `Payments` `ProfileForm` và `PaymentForm` ```

### “Data down”

Props chính là công cụ để giao tiếp từ node cha xuống node con. Xét ví dụ:

```jsx
const App = () => {
	const [people, setPeople] = useState([
		{name: "T3H"}, {name: "React"}
	])
	return (
		<div>
			<NameCard name={people[0].name} />
			<NameCard name={people[1].name} />
		</div>
	)
}

const NameCard = (props) => {
	return <div>Hello, my name is {props.name}</div>
}
```

Ta có component tree như sau:

![Untitled](./images-syllabus/dom-tree-1.png)

Hai component `NameCard` đều nhận các giá trị `name` từ component cha của chúng là App. Và đây cũng chính là luồng dữ liệu của React: **Data luôn di chuyển từ component cha xuống component con.**

### “Event up”

Props cho phép người dùng có thể truyền các dạng giá trị JS khác nhau từ component cha xuống component con, bao gồm cả các “functions”. Chúng ta sẽ truyền xuống các function từ phía component cha xuống component con. Và các component con sẽ thực hiện chạy các function đó khi cần thiết.

```jsx
const App = () => {
	const [alice, setAlice] = useState({name: "Alice", age: 10})
	const [bob, setBob] = useState({name: "Bob", age: 10})

	const increaseAliceAge = () => {
		setAlice({
			...alice,
			age: alice.age + 1,
		})
	}

	const increaseBobAge = () => {
		setBob({
			...bob,
			age: bob.age + 1,
		})
	}

	return (
		<div>
			<NameCard 
				name={alice.name} 
				age={alice.age} 
				onIncreaseAge={increaseAliceAge} 
			/>
			<NameCard 
				name={bob.name} 
				age={alice.age} 
				onIncreaseAge={increaseBobAge} 
			/>
		</div>
	)
}

const NameCard = (props) => {
	return (
		<div>
			<div>Hello, my name is {props.name}. I'm {props.age} years old</div>
			<button onClick={props.onIncreaseAge}>Increase age</button>
		</div>
	)
}
```

Việc tăng số tuổi của mỗi state bên trong ứng dụng trên được thực hiện khi người dùng click vào button “Increase age” bên trong component `NameCard`. Tuy nhiên, `age` là một props của `NameCard`, do đó, nó không thể được chỉnh sửa trực tiếp từ trong chính component đó. Giải pháp ở đây là tạo ra function `increase...Age` ở bên trong component `App`. Vì `alice` và `bob` đều là các state của `App` nên các function đó đều có thể thay đổi được giá trị tuổi của hai biến state trên. Sử dụng props để đưa các function đó xuống các component bên dưới. Và khi chúng được thực thi, state của App sẽ được cập nhật, dẫn tới cập nhật toàn bộ ứng dụng.

Như vậy, luồng dữ liệu của React được luôn chuyển theo công thức: **Data down - Events up**

![Untitled](./images-syllabus/data-down.png)

---

# Lifting state Up

Các ứng dụng web hiện đại đều muốn có sự chia sẻ dữ liệu giữa các components. Để thực hiện được điều này trong ứng dụng React cần phải sử dụng một kĩ thuật đặc biệt: “Lifting state up”.

Xét ví dụ sau:

```jsx
import {useState} from 'react'
const App = () => {
	return (
		<div>
			<ProductList />
			<Cart/>
		</div>
	)
}

const ProductList = () => {
	const [products, setProducts] = useState([])
	return (...) // UI here
}

const Cart = () => {
	const [cartItems, setCartItems] = useState([])
	return (...) // UI here
}
```

Do dữ liệu luôn được luân chuyển theo hướng từ trên xuống dưới, component `Cart` và component `ProductList` là 2 node sibling, chúng không thể trực tiếp trao đổi dữ liệu cho nhau. Với luồng dữ liệu được luân chuyển từ trên xuống dưới như React, ta cần phải sử dụng một kĩ thuật đặc biệt là “lifting state up”.

“Lifting state up” cơ bản là đặt state đúng vị trí của chúng (thường nói đến việc đưa các giá trị state lên các tầng cao hơn) để đạt được mục đích chia sẻ dữ liệu dữ các thành phần.

![Giả sử đây là sơ đồ của một trận chiến ven sông. Các điểm màu đỏ là nơi địch đóng quân. Điểm màu xanh là nơi ta đóng quân. Dòng sông có hướng chảy theo chiều mũi tên. Nhiệm vụ của chúng ta là cần tiêu hao sinh lực kẻ thù bằng cách sử dụng thuốc độc đồ xuống sông, khiến địch không có nước sinh hoạt. Vậy chúng ta nên đổ thuốc độc ở điểm nào trên bản đồ?](./images-syllabus/state-up.png)

Giả sử đây là sơ đồ của một trận chiến ven sông. Các điểm màu đỏ là nơi địch đóng quân. Điểm màu xanh là nơi ta đóng quân. Dòng sông có hướng chảy theo chiều mũi tên. Nhiệm vụ của chúng ta là cần tiêu hao sinh lực kẻ thù bằng cách sử dụng thuốc độc đồ xuống sông, khiến địch không có nước sinh hoạt. Vậy chúng ta nên đổ thuốc độc ở điểm nào trên bản đồ?

Như đã biết ở trên, dữ liệu trong React chỉ có thể đi theo một chiều (từ component cha xuống component con). Các component “sibling” không thể truyền được dữ liệu cho nhau. Có nghĩa là khi một bên cập nhật dữ liệu, bên còn lại sẽ không được cập nhật đồng bộ theo.

Giải pháp ở đây là cần đưa dữ liệu đó lên level cao hơn trong cây component. Và truyền xuống bên dưới thông qua props.

![Untitled](./images-syllabus/state-down.png)

Khi này, cả `Cart` và `ProductList` đều nhận chung một nguồn dữ liệu từ component `Home` truyền xuống, đảm bảo được một điều quan trọng: **chúng có chung một nguồn dữ liệu gốc (single source of truth)**. Việc chỉnh sửa dữ liệu bên trong component `Home` sẽ làm cả 2 thành phần bên dưới đều được thay đổi. Khi cần thay đổi dữ liệu của cả 2 component `Cart` và `ProductList`, ta luôn cần phải nhớ một điều: Hãy cập nhật dữ liệu ở nguồn của chúng.

Một khi dữ liệu gốc bị thay đổi, React , giống như dòng sông, sẽ đưa dữ liệu đó tới khắp các component cần chịu ảnh hưởng, và tiến hành tính toán loại các component đó cho chúng ta.

```jsx
import {useState} from 'react'
const App = () => {
	const [products, setProducts] = useState([])
	const [cartItems, setCartItems] = useState([])

	const addToCart = (p) => {
		setCartItems((prev) => {
			return [
				...prev,
				{
					productId: p.id,
					quantity: 1,
					price: p.price,
				}
			]
		})
	}

	return (
		<div>
			<ProductList products={products} onAddToCart={addToCart} />
			<Cart cartItems={cartItems} />
		</div>
	)
}

const ProductList = (props) => {
	return (...) // UI here
}

const Cart = (props) => {
	return (...) // UI here
}
```

>📌 Để chọn được đúng vị trí đặt dữ liệu cần chia sẻ giữa component A và B, chúng ta cần tìm tới node tổ tiên chung gần nhất của cả 2 component đó. Ví dụ với hình minh hoạt ở trên, cha chung gần nhất của F và G là D, của E và G là C.
