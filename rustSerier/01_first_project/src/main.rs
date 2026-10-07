use std::io::stdin;

fn main() {

    let mut msg = String::new();
    println!("Enter your message:");
    stdin().read_line(&mut msg).unwrap();
    println!("Message is :{}",msg)

}