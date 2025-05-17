const akband = prompt(
  "Vilken typ av åkband har du? (small, medium, large eller platinum)"
);

if (akband === "large" || akband === "platinum") {
  console.log("Du får åka Balder med ditt åkband");
} else if (akband === "small" || akband === "medium") {
  console.log("Du får tyvärr inte åka Balder med ditt åkband");
} else {
  console.log("Okänd åkbandstyp");
}
