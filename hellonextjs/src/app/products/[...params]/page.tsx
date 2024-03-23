export default function ProductInfo({params}: { params: any[]}) {
    return (
        <div>
            <h1>{params.params[0]}</h1>
            You have a discount of {params.params[1]}%
            
            {params.params[2] && <p>Additional Discount {params.params[2]}</p>}
            {params.params[3] && <p>Additional Discount {params.params[3]}</p>}
        </div>
    )
}