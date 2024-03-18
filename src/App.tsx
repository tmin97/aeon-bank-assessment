import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./@/components/ui/input";
import "./globals.css";

import { toast } from "sonner";
import { Button } from "./@/components/ui/button";
import { Form, FormField, FormItem } from "./@/components/ui/form";

const FormSchema = z.object({
  firstNumber: z.string(),
  secondNumber: z.string(),
  total: z.string(),
});

function App() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstNumber: "",
      secondNumber: "",
      total: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    if (!data.firstNumber || !data.secondNumber) {
      toast.error("Please enter both numbers.");
      return;
    }

    form.setValue(
      "total",
      `${parseInt(data.firstNumber) + parseInt(data.secondNumber)}`
    );
  }

  return (
    <div className="container h-screen flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-col space-y-2"
        >
          <h1>Adding Two Numbers</h1>
          <FormField
            control={form.control}
            name="firstNumber"
            render={({ field }) => (
              <FormItem>
                <Input
                  type="number"
                  placeholder="First Number"
                  {...field}
                  onChange={(e) => {
                    if (e.target.value == "0") e.target.value = "";
                    if (e.target.value != "")
                      e.target.value = parseInt(e.target.value).toString();
                    field.onChange(e);
                  }}
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secondNumber"
            render={({ field }) => (
              <FormItem>
                <Input
                  type="number"
                  placeholder="Second Number"
                  {...field}
                  onChange={(e) => {
                    if (e.target.value == "0") e.target.value = "";
                    if (e.target.value != "")
                      e.target.value = parseInt(e.target.value).toString();
                    field.onChange(e);
                  }}
                />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>

          <h1>Total: {parseInt(form.watch("total") || "0")}</h1>
        </form>
      </Form>
    </div>
  );
}

export default App;
