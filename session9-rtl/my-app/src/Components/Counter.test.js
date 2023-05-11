import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./Counter.js"

it("sets counter to 1", async () => {
    render(<Counter />)

    //Act
    await fireEvent.click(screen.getByText("Add"))
    await screen.findByRole("heading")

    //Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Count: 1")

})